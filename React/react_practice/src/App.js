// import PropsPrac1 from './04Props/PropsPrac1';
// import PropsPrac2 from './04Props/PropsPrac2';
// import Message from './05Event/Message';
// import StatePrac1 from './06State/StatePrac1';
// import StatePrac2 from './06State/StatePrac2';
// import StatePrac3 from './06State/StatePrac3';
// import StatePrac4 from './06State/StatePrac4';
// import UseStatePrac1 from './07UseState/UseStatePrac1';
// import UseStatePrac2 from './07UseState/UseStatePrac2';
// import UseStatePrac3 from './07UseState/UseStatePrac3';
// import UseStatePrac4 from './07UseState/UseStatePrac4';
// import UseStatePrac5 from './07UseState/UseStatePrac5';

// import LifeCyclePrac from './08Lifecycle/LifeCyclePrac';
// import LifeCyclePrac2 from './08Lifecycle/LifeCyclePrac2';
// import RefClassPrac from './09Ref/RefClassPrac';
// import RefFuncPrac from './09Ref/RefFuncPrac';

// import UseReduerPrac from './10Hook/useReducerPrac';

//import WormComponent from './11Style/WormComponent';
// import SassPrac from './11Style/SassPrac';
// import StyledPrac from './11Style/StyledPrac';
// import StyledPrac2 from './11Style/StyledPrac2';
// import Router from './12Router/Router';

// import FormPrac from './13Form/FormPrac';

// import ThemeSelector from './14Context/ThemeSelector';
// import LangSelector from './14Context/LangSelector';
// import { SettingProvider } from './14Context/store/setting-context';
// import './App.css';
import Cart from './14Context/Cart';
import ProductList from './14Context/ProductList';
import { CartProvider } from './14Context/store/cart-context';

function App() {
  return (
    <>
      {/* Prop 실습 */}
      {/* <PropsPrac1 food="치킨" />
            <PropsPrac1 />
            <PropsPrac2
                title={"나의하루는 4시40분에 시작된다"}
                author={"김유진"}
                price={"13,600원"}
                type={"자기개발서"}
            /> */}
      {/* 이벤트 핸들링 실습 */}
      {/* <Message message={"Hello React"} /> */}
      {/* state 실습 */}
      {/* <StatePrac1 />
            <StatePrac2 />
            <StatePrac3 />
            <StatePrac4 /> */}
      {/* useState 실습 */}
      {/* <UseStatePrac1 /> */}
      {/* <UseStatePrac2 /> */}
      {/* <UseStatePrac3 /> */}
      {/* <UseStatePrac4 /> */}
      {/* <UseStatePrac5 /> */}

      {/* LifeCycle 실습 */}
      {/* <LifeCyclePrac /> */}
      {/* <LifeCyclePrac2 /> */}

      {/* 09Ref 실습 */}
      {/* <RefClassPrac /> */}
      {/* <RefFuncPrac /> */}

      {/* 10Hook 실습 */}
      {/* <UseReduerPrac /> */}

      {/* 11Style 실습 */}
      {/* <WormComponent /> */}
      {/* <SassPrac /> */}
      {/* <StyledPrac /> */}
      {/* <StyledPrac2 /> */}

      {/* 12Router 실습 */}
      {/* <Router /> */}

      {/* 13Form 실습 */}
      {/* <FormPrac /> */}

      {/* 14Context 실습 */}
      {/* <SettingProvider>
        <ThemeSelector />
        <LangSelector />
      </SettingProvider> */}
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
