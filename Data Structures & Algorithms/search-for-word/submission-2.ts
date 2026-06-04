class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {

        let res = false;
        let maxI = board.length -1;
        let maxJ = board[0].length -1;
        let boardMap = Array.from({length: maxI + 1}, ()=> Array(maxJ+1).fill(false))
        function backTrack(curr: string, currI: number, currJ: number){
            if(curr === word){
                res = true;
                return
            }
            // if(currI>maxI || currI < max)
            //up
            let nextI = currI - 1;
            let nextJ = currJ;
            if(nextI>=0 && word[curr.length] === board[nextI][nextJ] && !boardMap[nextI][nextJ]){
                boardMap[nextI][nextJ] = true;
                backTrack(curr+board[nextI][nextJ], nextI, nextJ);
                boardMap[nextI][nextJ] = false;
            }
            //down
            nextI = currI + 1;
            nextJ = currJ;
            if(nextI<=maxI && word[curr.length] === board[nextI][nextJ] && !boardMap[nextI][nextJ]){
                boardMap[nextI][nextJ] = true;
                backTrack(curr+board[nextI][nextJ], nextI, nextJ);
                boardMap[nextI][nextJ] = false;
            }

            //right
            nextI = currI;
            nextJ = currJ+1;
            if(nextJ<=maxJ && word[curr.length] === board[nextI][nextJ] && !boardMap[nextI][nextJ]){
                boardMap[nextI][nextJ] = true;
                backTrack(curr+board[nextI][nextJ], nextI, nextJ);
                boardMap[nextI][nextJ] = false;
            }

            //left
            nextI = currI;
            nextJ = currJ-1;
            if(nextJ>=0 && word[curr.length] === board[nextI][nextJ] && !boardMap[nextI][nextJ]){
                boardMap[nextI][nextJ] = true;
                backTrack(curr+board[nextI][nextJ], nextI, nextJ);
                boardMap[nextI][nextJ] = false;
            }
        }

        for(let i=0;i<=maxI;i++){
            for(let j=0;j<=maxJ; j++){
                if(word[0]=== board[i][j]){
                    boardMap[i][j] = true;
                    backTrack(word[0], i,j);
                    boardMap[i][j] = false;
                }
            }
        }
        
        return res;
    }
}
