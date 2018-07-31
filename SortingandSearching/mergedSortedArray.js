var merge = function(nums1, m, nums2, n) {
    let mPointer = 0
    let nPointer = 0
    
    while (nPointer < n) {
       if (nums1[mPointer] > nums2[nPointer])  {
          for (let i = m; i > mPointer; i--) {
              nums1[i] = nums1[i-1];
          }
           nums1[mPointer] = nums2[nPointer]
           m++
           nPointer++
           mPointer++
             
       }
        else if (nums1[mPointer] === 0 && mPointer === m) {
             nums1[mPointer] = nums2[nPointer] 
            m++
           nPointer++
           mPointer++
        }
        else {
            mPointer++
        }
    } 
};