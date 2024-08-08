import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
import { MyLogger } from './logger/logger.service';

const inputFilePath = path.resolve('arquivo.txt');
const outputFilePath = path.resolve('output.xlsx');

const logger = new MyLogger();

try {
  const data = fs.readFileSync(inputFilePath, 'utf8');

  const rows = data
    .split('\n')
    .map((row) => row.split('|').map((cell) => cell.trim()));

  logger.log(`Processed rows: ${JSON.stringify(rows)}`);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  rows.forEach((row) => {
    worksheet.addRow(row);
  });

  const percentageColumn = worksheet.getColumn(rows[0].length);
  percentageColumn.eachCell((cell) => {
    if (typeof cell.value === 'string' && cell.value.includes('%')) {
      cell.value = parseFloat(cell.value.replace('%', '')) / 100;
      cell.numFmt = '0.00%';
    }
  });

  workbook.xlsx.writeFile(outputFilePath).then(() => {
    logger.log('Arquivo convertido com sucesso para output.xlsx');
  });
} catch (error) {
  logger.error('Erro ao converter o arquivo', error.stack);
}
