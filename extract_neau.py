import os
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            PARA = WORD_NAMESPACE + 'p'
            TEXT = WORD_NAMESPACE + 't'
            
            paragraphs = []
            for paragraph in tree.iter(PARA):
                texts = [node.text for node in paragraph.iter(TEXT) if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
                    
            return '\n'.join(paragraphs)
    except Exception as e:
        return str(e)

docs = [
    'Chap.1 - Introduction Evaluation.docx',
    'Chap.2 - Evaluation par approche comparative .docx',
    'Chap.3 - Eval. approche patr. DSCG28.docx',
    'Chap.4 - Eval.  approche mixte - DSCG 28.docx',
    'chap.5 - Evaluations spécifiques - DSCG28.docx'
]

os.makedirs('scratch/neau', exist_ok=True)
for doc in docs:
    path = os.path.join('Cours complet NEAU', doc)
    text = extract_text_from_docx(path)
    out_name = doc.replace('.docx', '.txt')
    with open(os.path.join('scratch/neau', out_name), 'w', encoding='utf-8') as f:
        f.write(text[:8000]) # get first 8000 chars for context
        
print("Extraction complete for Neau.")
