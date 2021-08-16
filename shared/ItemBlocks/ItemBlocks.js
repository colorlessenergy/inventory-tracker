export function addItemBlock ({ itemBlock, setItemBlocks }) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    itemBlock.amount = parseInt(itemBlock.amount);

    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks.push(itemBlock);

    if (setItemBlocks) {
        setItemBlocks(itemBlocks);
    }

    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}

export function getItemBlocks () {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    return JSON.parse(localStorage.getItem('itemBlocks'));
}

export function setItemBlock ({ itemBlock, index, setItemBlocks }) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    itemBlock.amount = parseInt(itemBlock.amount);

    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks[index] = itemBlock;

    if (setItemBlocks) {
        setItemBlocks(itemBlocks);
    }

    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}

export function removeItemBlock ({ index, setItemBlocks }) {
    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    itemBlocks.splice(index, 1);

    if (setItemBlocks) {
        setItemBlocks(itemBlocks);
    }

    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}