class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    validateSubGrid(board, indexR, indexC){
        let store = new Set();
        for(let i=indexR; i<(indexR+3); i++){
            for(let j=indexC; j<(indexC+3); j++){
                if(board[i][j]=="."){
                    continue;
                }
                if(store.has(board[i][j])){
                    // console.log("subgrid check", board[i][j], i,j)
                    return false;
                }
                else{
                    store.add(board[i][j]);
                }
            }
        }
        return true;

    }
    validateRows(board){
        for(let i=0; i<9; i++){
            let store = new Set();
            for(let j=0; j<9; j++){
                if(board[i][j]=="."){
                    continue;
                }
                if(store.has(board[i][j])){
                    // console.log("row check", board[i][j])
                    return false;
                }
                else{
                    store.add(board[i][j]);
                }
            }
        }
        return true;
    }
    validateColumns(board){
        for(let i=0; i<9; i++){
            let store = new Set();
            for(let j=0; j<9; j++){
                if(board[j][i]=="."){
                    continue;
                }
                if(store.has(board[j][i])){
                    // console.log("column check", board[i][j])
                    return false;
                }
                else{
                    store.add(board[j][i]);
                }
            }
        }
        return true
    }
    isValidSudoku(board) {
        return this.validateColumns(board) && this.validateRows(board) && this.validateSubGrid(board, 0,0) && this.validateSubGrid(board, 3,0) && this.validateSubGrid(board, 6,0) && this.validateSubGrid(board, 0, 3) && this.validateSubGrid(board, 3, 3) && this.validateSubGrid(board, 6, 3) && this.validateSubGrid(board, 0, 6) && this.validateSubGrid(board, 3, 6) && this.validateSubGrid(board, 6, 6)
    }
}
