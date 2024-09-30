import styles from './AboutMe.module.scss';

export function AboutMeSection() {
  return (
    <div className='w-[544px] bg-blackPearl-500 rounded-2xl px-20 py-16 text-right ml-auto mr-5'>
        <div>
            <div className='text-7xl text-right font-thick font-extrabold'>
                <span className='text-white'>About </span>
                <span className='text-portage-500'>me</span>
            </div>
        </div>
        <div>
            <div className='text-whisper-600 pt-5'>
                <span>Hello! I am a curious student with a passion for the world of technology. Since I was a child, I've always sought to learn about everything that piqued my interest, which has led me to explore various fields throughout my journey. <br/><br/></span>

                <span>Today, I am a Fullstack Web Developer, allowing me to combine creativity and logic to build digital experiences. My path includes roles in IT infrastructure and the world of DevOps.<br/><br/></span>

                <span>Each new skill I acquire inspires me to research and develop even more, and this passion for constant learning motivates me to tackle new challenges. I am always looking for innovative solutions and ways to enhance my knowledge, contributing to the evolution of technology.<br/><br/></span>

                <span className='text-portage-500'>Let’s work together to turn ideas into reality!</span>
            </div>
        </div>
        <div>
                
        </div>
    </div>
  );
}

export default AboutMeSection;