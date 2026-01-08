import pandas as pd
import os
import sys

# Set encoding to utf-8 for stdout
sys.stdout.reconfigure(encoding='utf-8')

try:
    xl = pd.ExcelFile(r'e:\عاصم ملفات\الجمعية\2025\المشاريع والأنشطة\Report2025\المشاريع مصنفة.xlsx')
    with open('data_dump_2.txt', 'w', encoding='utf-8') as f:
        f.write('\n--- Mines Data ---\n')
        f.write(pd.read_excel(xl, 'التوعية بمخاطر الألغام  ').to_string())
        
        f.write('\n\n--- RFL Data ---\n')
        f.write(pd.read_excel(xl, 'اعادة الروابط').to_string())
        
        f.write('\n\n--- Images ---\n')
        files = os.listdir(r'e:\عاصم ملفات\الجمعية\2025\المشاريع والأنشطة\Report2025\صور الأنشطة')
        for file in files:
            f.write(f'{file}\n')

    print("Dump 2 created successfully")
except Exception as e:
    print(f"Error: {e}")
