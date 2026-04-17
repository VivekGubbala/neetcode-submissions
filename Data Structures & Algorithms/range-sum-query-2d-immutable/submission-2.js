class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = this.generateSumArray(matrix)
        // this.sumMatrix = this.generateSumArray(matrix)
    }
    calculateSumOfCell(matrix, m,n){
        let sum = 0;
        for(let i=0; i<=m ; i++){
            for(let j=0; j<=n; j++){
                sum = sum + matrix[i][j];
            }
        }
        return sum
    }
    generateSumArray(matrix){
        let sumMatrix = new Array(matrix.length).fill(null).map(i=> new Array(matrix[0].length).fill(0))
        for(let i=0; i< matrix.length; i++){
            for(let j=0; j< matrix[0].length; j++){
                sumMatrix[i][j] = this.calculateSumOfCell(matrix , i, j)
            }
        }
        return sumMatrix
    }
    
    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {

        if(row1==0 && col1 ==0){
           return this.matrix[row2][col2]; 
        }
        if(row1==0){
           return this.matrix[row2][col2] - this.matrix[row2][col1-1];
        }
        if(col1==0){
           return this.matrix[row2][col2] - this.matrix[row1-1][col2];
        }
        return this.matrix[row2][col2] - this.matrix[row2][col1-1] - this.matrix[row1-1][col2] + this.matrix[row1-1][col1-1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
