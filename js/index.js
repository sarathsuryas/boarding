onmessage = function(e) {
    const sortedItems = bubblesort(e.data);
    postMessage(sortedItems);
 };
 function bubblesort(items = [1, 2, 3, 4, 5]) {
     const length = items.length;
     for (let i = 0; i < length; i++) {
         let optimizer = 0;
         for (let j = 0; j < (length - i - 1); j++) {
             if (items[j] > items[j + 1]) {
                 [items[j], items[j + 1]] = [items[j + 1], items[j]];
                 optimizer++;
             }
         }
         if(!optimizer){
             break;
         }
     }
     return items;
 }