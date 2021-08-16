export function addItemBlock (itemBlock) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    itemBlock.amount = parseInt(itemBlock.amount);

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

export function setItemBlock ({ itemBlock, index }) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    itemBlock.amount = parseInt(itemBlock.amount);

    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks[index] = itemBlock;
    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}

export function removeItemBlock ({ index }) {
    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks.splice(index, 1);
    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}