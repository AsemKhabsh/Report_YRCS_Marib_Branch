import pandas as pd
import sys

# Set encoding to utf-8 for stdout
sys.stdout.reconfigure(encoding='utf-8')

try:
    xl = pd.ExcelFile(r'e:\عاصم ملفات\الجمعية\2025\المشاريع والأنشطة\Report2025\المشاريع مصنفة.xlsx')
    with open('data_dump.txt', 'w', encoding='utf-8') as f:
        f.write(f'Sheets: {xl.sheet_names}\n')
        
        # Mines Awareness
        if 'التوعية بالألغام' in xl.sheet_names:
            f.write('\n--- Mines Awareness ---\n')
            df = pd.read_excel(xl, 'التوعية بالألغام')
            f.write(df.to_string())
        
        # RFL
        if 'إعادة الروابط' in xl.sheet_names:
            f.write('\n--- RFL ---\n')
            df = pd.read_excel(xl, 'إعادة الروابط')
            f.write(df.to_string())
            
        # Media / International Movement
        # Look for sheet name related to "الإعلام التعريف بالحركة الدولية"
        # User mentioned: "ورقة جديدة الإعلام التعريف بالحركة الدولية"
        media_sheets = [s for s in xl.sheet_names if 'إعلام' in s or 'التعريف' in s]
        for sheet_name in media_sheets:
             f.write(f'\n--- Media Sheet: {sheet_name} ---\n')
             df = pd.read_excel(xl, sheet_name)
             f.write(df.to_string())
            
    print("Dump created successfully")
except Exception as e:
    print(f"Error: {e}")
