import os
import glob

def fix_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8-sig') as f: # utf-8-sig removes BOM if present
            text = f.read()
        
        # Check if file has mojibake. A common sequence is 'Ã©' for 'é'
        if 'Ã' not in text:
            return False

        # Encode back to bytes using cp1252 (PowerShell's default ANSI on fr/en Windows)
        # We use errors='ignore' or 'replace' if needed, but 'strict' is better to catch issues
        try:
            raw_bytes = text.encode('cp1252')
        except UnicodeEncodeError as e:
            print(f"Encode error in {filepath}: {e}")
            # Try to fix by replacing only the mojibake chars if cp1252 fails?
            return False
            
        original_text = raw_bytes.decode('utf-8')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(original_text)
        print(f"Fixed {filepath}")
        return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

files = glob.glob('**/*.html', recursive=True)
for file in files:
    fix_file(file)
