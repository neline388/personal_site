import { Component } from "@angular/core";

@Component({
    selector:'app-middle',
    standalone: true,
    template:`
    <div class="mid">
        <div class="container">
            <div class="visual-side">
                <div class="skewed-square"></div>

                <img 
                    [src]="imageSrc"
                    alt="Photo Of Me"
                    class="overlapping-image"
                    (mouseenter)="swapImage(true)"
                    (mouseleave)="swapImage(false)"
                >
            </div>

            <div class="text-side">
                <div class="text-container">
                    <p class="text">Hi! I build websites and analyze data — part coder, part data nerd, 100% curious.</p>
                </div>
            </div>
        </div>
    </div>`,
styles:[`
        
    .mid {
        position: relative;
        width: 100%;
        min-height: 500px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 100px auto;
        animation: fadeInUp 0.8s ease-out;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1000px;
        width: 100%;
        gap: 300px;
    }
    
    .visual-side {
        position: relative;
        flex-shrink: 0;
        width: 350px;
        height: 350px;
    }
    
    .skewed-square {
        width: 500px;
        height: 500px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        transform: skew(-2deg, -1deg) rotate(10deg);
        position: absolute;
        z-index: 1;
        border-radius: 15px;
        transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        top: 0;
        left: 0;
    }
    
    .skewed-square:hover {
        transform: rotate(4deg) scale(1.1);
    }
    
    .overlapping-image {
        width: 650px;
        height: 650px;
        object-fit: contain;
        position: absolute;
        z-index: 2;
        border-radius: 10px;
        transform: translate(20px, -15px);
        transition: all 0.3s ease;
        top: -5%;
        left: -25%;
    }
    
    .overlapping-image:hover {
        transform: translate(20px, -15px) rotate(-25deg) scale(1.02);
    }
    
    .text-side { 
        flex: 1; 
        display: flex; 
        align-items: center; 
        justify-content: flex-start;
    } 
    
    .text-container { 
        max-width: 500px; 
    } 
    
    .text { 
        font-size: 20px; 
        line-height: 1.6; 
        margin: 0; 
        color: white; 
        font-family: 'Arial', sans-serif; 
        font-weight: 500; 
    }

    @media (max-width: 900px) {

.container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.mid {
    margin: 40px auto;
}

.visual-side {
    width: 250px;
    height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skewed-square {
    width: 260px;
    height: 260px;
    transform: rotate(5deg);
    top: 0;
    left: 0;
}

.overlapping-image {
    width: 230px;
    height: 230px;
    position: relative;
    top: 0;
    left: 0;
    transform: none !important;
    object-fit: contain;
}

.overlapping-image:hover {
    transform: scale(1.03);
}

.text-container {
    text-align: center;
    max-width: 90%;
}

.text {
    font-size: 18px;
}
}

@media (max-width: 500px) {

.visual-side {
    width: 200px;
    height: 200px;
}

.skewed-square {
    width: 220px;
    height: 220px;
}

.overlapping-image {
    width: 200px;
    height: 200px;
}

.text {
    font-size: 16px;
}
}
    `]
    
})
export class midcomponent {

    imageSrc = 'assets/pictures/Gemini_Generated_Image_viqchtviqchtviqc(1).png';

    swapImage(isHover: boolean) {
        this.imageSrc = isHover
            ? 'assets/pictures/transparent_output(1).png'
            : 'assets/pictures/Gemini_Generated_Image_viqchtviqchtviqc(1).png';
    }
}
