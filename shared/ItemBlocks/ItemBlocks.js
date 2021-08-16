export function addItemBlock (itemBlock) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks.push(itemBlock);
    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}


export function getItemBlocks () {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    return JSON.parse(localStorage.getItem('itemBlocks'));
}