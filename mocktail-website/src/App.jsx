import gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);

const app=() => {
  return (
    <div className="flex-center">
      <h1 className="text-3xl text-indigo-300">Welcome to the Mocktail Website</h1>
    
    </div>
  );
}
export default app;