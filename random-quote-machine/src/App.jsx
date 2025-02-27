
function Header() {

  return (
    <header>
      <h1 class = "head">Share Inspiration!</h1>
    </header>
  );
}

function Buttons() {
  return(<div id = "icon-holder">
  <a id = "tweet-quote" class = "btn" href = "https://www.twitter.com/intent/tweet"><i class="fa-brands fa-x-twitter"></i></a>
  <a id= "tumblr-quote" class = "btn" href = ""><i class="fa-brands fa-tumblr"></i></a>
  <button id = "new-quote" class = "btn">Next Quote</button>
</div>);
}

function QuoteBox() {

  return(
    <div id = "quote-box" class = "container">
      <p id = "text"></p>
      <p id = "author"></p>
      <Buttons/>
    </div>
  );
}


function App() {
  return(
    <div>
      <Header/>
      <QuoteBox/>
    </div>
  );
}

export default App 
