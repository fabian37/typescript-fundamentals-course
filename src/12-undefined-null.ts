(()=> {
  //  let myNumber: number = undefined;
  //  let myString: string = null;
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null; //
    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'aas';

    //opcion 1 con if
    function hi(name: string | null) {
      let hello = 'Hola ';
      if (name) {
        hello += name.toLowerCase();
      } else {
        hello += 'nobody';
      }
      console.log(hello);
    }

    //opcion 2 con el Optional chaining
    function hiV2(name: string | null) {
      let hello = 'Hola ';
      hello += name?.toLowerCase();
      console.log(hello);
    }

    hi('Fabian');
    hi(null);

    hiV2('Fabian');
    hiV2(null);
  })();
