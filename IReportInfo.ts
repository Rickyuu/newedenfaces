export interface IFileCovInfo {
  stmtsCount: number;
  covStmtsCount: number;
  branchCount: number;
  covBranchCount: number;
  funcsCount: number;
  covFuncsCount: number;
  linesCount: number;
  covLinesCount: number;
  covLines: string[];
  unCovLines: string[];
}

export interface ICodeChurnCovInfo {
  linesCount: number;
  covLinesCount: number;
  covLines: string[];
  unCovLines: string[];
}

export interface IReportItem {
  fullName: string;
  fileCovInfo: IFileCovInfo;
  codeChurnCovInfo: ICodeChurnCovInfo;
}
