import Counter from "./components/Counter";
import SlowComponent from "./components/SlowComponent";

export default function Test() {
  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
