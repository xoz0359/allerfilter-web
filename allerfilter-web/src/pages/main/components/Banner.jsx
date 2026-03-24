import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { useRef, useState, useEffect } from 'react'
import '../Main.css';
import testImg1 from '@/resources/images/신라면블랙.jpg'
import testImg2 from '@/resources/images/파워오투.jpg'
import testImg3 from '@/resources/images/포테토칩.jpg'

function Banner() {

    const autoPlay = useRef(
        AutoPlay({ delay: 5000 })
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [autoPlay.current]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    const slides = [testImg1, testImg2, testImg3]

    useEffect(() => {
        if ((!emblaApi)) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    return (
        <div 
        className="embla" 
        ref={emblaRef}
        onMouseEnter={() => autoPlay.current.stop()}
        onMouseLeave={() => autoPlay.current.play()}
        >
            <div className="embla__container">
                {slides.map((slide, index) => (
                    <div className="embla__slide" key={index}>
                        <img className="banner-image" src={slide} />
                    </div>
                ))}
            </div>

            <div className="dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={index === selectedIndex ? "active" : ""}
                        onClick={() => emblaApi.scrollTo(index)}
                    />
                ))}
            </div>

        </div>
    )
}
export default Banner