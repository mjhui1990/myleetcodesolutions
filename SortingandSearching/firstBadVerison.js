var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     
     * @return {integer} The first bad version
     */
    
    return function(n) {
        if (n===1 ) return 1
        let start = 1;
        let end = n;
        while(start !== end) {
           
            let average = Math.floor((start + end)/2)
            if(isBadVersion(average)) {
                end = average
            }else{
                start = average+1
            }  
        }
        return end
    };
};