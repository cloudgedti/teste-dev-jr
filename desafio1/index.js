const fs = require("fs");
const xlsx = require("xlsx");

function lerArquivoTxt(caminhoArquivo) {
   try {
      const conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
      return conteudo.split("\n");
   } catch (err) {
      console.error("Erro ao ler o arquivo:", err);
      return null;
   }
}

function salvarParaExcel(dados, caminhoArquivo) {
   const workbook = xlsx.utils.book_new();
   const worksheet = xlsx.utils.aoa_to_sheet(dados);

   xlsx.utils.book_append_sheet(workbook, worksheet, "Dados");

   try {
      xlsx.writeFile(workbook, caminhoArquivo);
      console.log(`Dados salvos em ${caminhoArquivo} com sucesso.`);
   } catch (err) {
      console.error("Erro ao salvar o arquivo Excel:", err);
   }
}

const caminhoTxt = "arquivo.txt";
const caminhoExcel = "dados.xlsx";

const linhas = lerArquivoTxt(caminhoTxt);

if (linhas) {
   const dadosParaExcel = linhas.map((linha) => [linha]);
   salvarParaExcel(dadosParaExcel, caminhoExcel);
}
