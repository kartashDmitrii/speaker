export default class hideList{
    constructor(listBlock, fixHeight = null) {
        this.fixHeight = fixHeight
        this.listBlock = listBlock;
        this.list = this.listBlock.querySelector('[data-block]');
        this.listBlock.querySelector('[data-btn]').addEventListener('click', (e)=>{this.showBlock(e)})
        if (this.listBlock.querySelector('[data-btn]').classList.contains('active')) {
            this.fixHeight === null ? this.list.style.height = `${this.list.scrollHeight}px` : this.list.style.height = `${this.fixHeight}px`;
            this.list.classList.add('active')
        }
        if (this.list.querySelector('.close')){
            this.list.querySelector('.close').addEventListener('click', (e)=>{this.showBlock(e)})
        }
    }
    showBlock(e){
        e.preventDefault();
        let blockHeight = parseInt(window.getComputedStyle(this.list).getPropertyValue('height'));
        if (blockHeight === 0){
            this.fixHeight === null ? this.list.style.height = `${this.list.scrollHeight}px` : this.list.style.height = `${this.fixHeight}px`;
            this.listBlock.querySelector('[data-btn]').classList.add('active');
            this.list.classList.add('active')
        } else {
            this.listBlock.querySelector('[data-btn]').classList.remove('active');
            this.list.classList.remove('active')
            this.list.style.height = `0`
        }
    }
}