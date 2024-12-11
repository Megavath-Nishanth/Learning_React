import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ClickEvent from './ClickEvent.jsx'
import ProfilePicture from './ProfilePicture.jsx'
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ];
  const vegetables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrot", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocolli", calories: 50 }
  ];
  return(
    <>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>

      {/* Card component */}

      <Card></Card>
      <Card></Card>
      <hr></hr>

      {/* how to style react components with css */}
      {/* not including external frameworks or preprocessors */}
      {/* 1. external
          2. modules
          3. inline
      */}
      <Button></Button>
      <hr></hr>
      
      {/* Props */}

      {/* props = read-only properties that are shared between components.
                  A parent component can send data to a child component.
                  <Component key=value>
      */}
      {/* propTypes = a mechanism that ensures that the passed value 
                      is of the correct datatype.
                      age: PropTypes.number
      */}
      {/* defaultProps = default values for props in case they are not 
                         passed to the parent component.
                         name: "Guest"
      */}
      <Student name="Nishanth" age={20} isStudent={true}></Student>
      <Student name="Nikhitha" age={21} isStudent={true}></Student>
      <Student></Student>
      <hr></hr>

      {/* conditional rendering = allows you to control what gets rendered */}
      <UserGreeting isLoggedIn={true} username="Nishanth"></UserGreeting>
      <UserGreeting isLoggedIn={false} username="Nishanth"></UserGreeting>
      <hr></hr>

      {/* Lists */}
      {fruits.length > 0 ? <List items={fruits} catergory="Fruits"></List> : null}
      {vegetables.length > 0 ? <List items={vegetables} catergory="Vegetables"></List> : null}
      <hr></hr>

      {/* click event = An interaction when a user clicks on a specific element.
                        We can respond to clicks by passing
                        a callback to the onClick event handler.
     */}
     <ClickEvent></ClickEvent>
     <hr></hr>
     <ProfilePicture></ProfilePicture>
    </>
  );

}

export default App
