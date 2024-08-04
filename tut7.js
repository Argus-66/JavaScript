function one(){
    const username = "John Doe";

    function two(){
        const website = "https://www.example.com";
        console.log(`Username: ${username}, Website: ${website}`);
    }
    //console.log(website); // ReferenceError: website is not defined

    two();
}

one();