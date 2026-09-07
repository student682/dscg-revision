import os
import zipfile
import xml.etree.ElementTree as ET

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            # The XML namespace for Word
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
    'Fusion-acquisition - vapp.docx',
    'Gestion de la valeur de l\'action - Vapp.docx',
    'Innovations financières - vform.docx',
    'La Trésorerie - Vapp.docx',
    'La valeur et le risque - Vapp.docx',
    'Opérations portant sur les dettes et les créances - Vapp.docx',
    'Politique de dividendes - Vapp.docx'
]

os.makedirs('scratch', exist_ok=True)
for doc in docs:
    path = os.path.join('finance complet hamman', doc)
    text = extract_text_from_docx(path)
    out_name = doc.replace('.docx', '.txt')
    with open(os.path.join('scratch', out_name), 'w', encoding='utf-8') as f:
        f.write(text[:5000]) # just getting the first 5000 chars for now to get a sense of structure
        
print("Extraction complete.")
