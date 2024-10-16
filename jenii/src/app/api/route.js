import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';

export default function handler(req, res) {
  console.log("Hitss")
  if (req.method === 'POST') {
    const { email, phone } = req.body;

   
    const filePath = path.resolve('./public/data.xlsx');

    let workbook;
    let worksheet;

   
    if (fs.existsSync(filePath)) {
     
      workbook = xlsx.readFile(filePath);
      worksheet = workbook.Sheets['Sheet1'];
    } else {
    
      workbook = xlsx.utils.book_new();
      worksheet = xlsx.utils.aoa_to_sheet([['Email', 'Phone']]);
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    }

   
    const existingData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

   
    existingData.push([email, phone]);

   
    const updatedSheet = xlsx.utils.aoa_to_sheet(existingData);

   
    workbook.Sheets['Sheet1'] = updatedSheet;

  
    xlsx.writeFile(workbook, filePath);

    res.status(200).json({ message: 'Data added successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
