// ==UserScript==
// @name         AcWingSupport
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  When you user programming language coding Algorithm，you may need input and output templates for a language.
// @author       houhaibushihai
// @match        https://www.acwing.com/problem/content/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

ace.edit("code_editor").setValue('import java.io.*;\nimport java.util.*;\n\npublic class Main {\n\tpublic static void main(String[] args) throws IOException {\n\t\tScanner sc = new Scanner(System.in);\n\t\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n\t\tBufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));\n\t\tString[] strArray1 = br.readLine().split(" ");\n\t\tn = Integer.parseInt(strArray1[0]);\n\t\tm = Integer.parseInt(strArray1[1]);\n\t\t\n\t\twhile (m-- != 0) {}\n\t\t\n\t\tbw.write();\n\t\tbw.flush();\n\t\tbw.close();\n\t\tbr.close();\n\t}\n\t\n\tprivate static final int N = (int) 2e5 + 10;\n\tprivate static int[] a = new int[N];\n\tprivate static int n, m;\n}')
