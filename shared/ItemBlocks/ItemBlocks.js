export function addItemBlock (itemBlock) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    if (!localStorage.getItem('ID')) {
        localStorage.setItem('ID', 0);
    }

    itemBlock.amount = parseInt(itemBlock.amount);
    let ID = parseInt(localStorage.getItem('ID'));
    ID += 1;
    localStorage.setItem('ID', ID);
    itemBlock.ID = ID;

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

export function setItemBlock (updatedItemBlock) {
    if (!localStorage.getItem('itemBlocks')) {
        localStorage.setItem('itemBlocks', JSON.stringify([]));
    }

    if (!localStorage.getItem('ID')) {
        localStorage.setItem('ID', 0);
    }

    updatedItemBlock.amount = parseInt(updatedItemBlock.amount);

    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    const index = itemBlocks.findIndex(itemBlock => itemBlock.ID === updatedItemBlock.ID);
    itemBlocks[index] = updatedItemBlock;
    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}

export function removeItemBlock (removedItemBlock) {
    let itemBlocks = JSON.parse(localStorage.getItem('itemBlocks'));
    const index = itemBlocks.findIndex(itemBlock => itemBlock.ID === removedItemBlock.ID);
    itemBlocks.splice(index, 1);
    localStorage.setItem('itemBlocks', JSON.stringify(itemBlocks));
}