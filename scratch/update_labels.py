import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Portail de Révision DSCG UE1 — Gestion Juridique, Fiscale et Sociale', 'Portail de Révision DSCG')
content = content.replace('<div class="brand-icon">UE1</div>', '<div class="brand-icon">DSCG</div>')
content = content.replace('<div class="brand-subtitle">Portail Interactif UE 1</div>', '<div class="brand-subtitle">Portail Interactif</div>')

content = content.replace('Droit (UE1)', 'Droit')
content = content.replace('Finance (UE2)', 'Finance')
content = content.replace('MCG (UE3)', 'Management et Contrôle de Gestion')

content = content.replace('Finance (M. Hamman)', 'Ingénierie Financière')
content = content.replace('Évaluation (Mme Neau)', 'Évaluation d\'Entreprise')

content = content.replace(
    'DSCG UE 1 — Support de Révision Intégré · Droit des sociétés, Droit fiscal & Droit des affaires', 
    'DSCG — Support de Révision Intégré<br>&copy; Benjamin. Tous droits réservés. Toute reproduction interdite. Protégé au titre de la propriété intellectuelle.'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated index.html!')
