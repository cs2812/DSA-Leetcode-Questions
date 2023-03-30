var rotate = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for(let i=0;i<n;i++){
      for(let j=i+1;j<m;j++){ 
        let tem = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i]=tem;   
      }
    }
    for(let i=0;i<n;i++){
      for(let j=0;j<m/2;j++){
        let tem = matrix[i][j]
         matrix[i][j] = matrix[i][m-1-j]
         matrix[i][m-1-j] = tem
      }
    }
    console.log(matrix)
};

let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
rotate(mat)