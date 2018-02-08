
   <form onSubmit={e => {
          e.preventDefault();
          if ($_POST["action"] == "Woman") {
            this.onAddWoman();
          } else {
            this.onAddMan();
          }
        }}>
        <button type="submit" name="action" value="Woman" className="round-blue-button">
          Woman
        </button>
        <button type="submit" name="action" value="Man" class="round-red-button">
          Man
        </button>
      </form>;



 <form onSubmit= {e => {e.preventDefault(); if ($_POST["action"] == 'woman') this.onAddWoman(); else this.onAddWoman();}}>
   <button type="submit" name="action" value="woman" class="round-blue-button">
     Woman
   </button>
   <button type="submit" name="action" value="man" class="round-red-button">
     Man
   </button>
 </form>;
  
 