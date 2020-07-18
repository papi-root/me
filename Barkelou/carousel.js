class Carousel {

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slideToScroll Nombre d'element a faire defiler
     * @param {Object} options.slideToScroll Nombre d'element visible dans un slide 
     */ 

    constructor(element, options = {}) {
        this.element = element 
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options) 
        
        let children = [].slice.call(element.children)

        this.currentItem = 0 

        this.root = this.createDivWithClass('carousel')

        this.container = this.createDivWithClass('carousel_container')
        this.root.appendChild(this.container)

        this.element.appendChild(this.root) 

        this.items = children.map((child) =>  {
            let item = this.createDivWithClass('carousel_item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        }) 

        this.setStyle()
        this.createNavigation()
    } 

    /**
     * @param {String} className
     * @return {HTMLElement} 
     */ 

    createDivWithClass (className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div 
    } 

    /**
     * Apllique les bonnes dimensions aux elements 
     */

    setStyle() {
        let ratio = this.items.length / this.options.slidesVisible
        this.container.style.width = (ratio * 100 ) + "%" 
        this.items.forEach(item => item.style .width = ((100 / this.options.slidesVisible ) / ratio) + "%" )
    }

    createNavigation(){
        let nextButton = this.createDivWithClass('carousel_next')
        let prevButton = this.createDivWithClass('carousel_prev')
        this.root.append(nextButton)
        this.root.append(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
    }

    next(){
        this.gotoItem(this.currentItem + this.options.slidesToScroll)
    }

    prev(){
        this.gotoItem(this.currentItem - this.options.slidesToScroll)
    } 

    /**
     * Deplace le carousel vers l'element cible 
     * @param {number} index
     */

    gotoItem(index){

        if(index < 0){
            index = this.items.length - this.options.slidesVisible
        }else if(index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined) {
            index = 0
        }

        let translateX = index * -100 / this.items.length 
        this.container.style.transform = `translate3d(${translateX}%, 0, 0)`
        this.currentItem = index 
    }
}

    // Main 
document.addEventListener('DOMContentLoaded', function() {

    new Carousel (document.querySelector('#carousel1'), {
        slidesVisible: 3,
        slidesToScroll: 2
    }) 
}) 

document.addEventListener('DOMContentLoaded', function() {

    new Carousel (document.querySelector('#carousel2'), {
        slidesVisible: 3,
        slidesToScroll: 2
    }) 
})
   
   
