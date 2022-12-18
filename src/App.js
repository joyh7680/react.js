import Counter from './Counter';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  return (
    <div>
      <div>
        <MyComponent name="React" favoriteNumber={3}>
          리액트
        </MyComponent>
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Say />
      </div>
    </div>
  );
};

export default App;