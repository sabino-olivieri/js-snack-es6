## Testo della consegna
Snack 1:
Crea un array composto da 4 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. (modificato) 


## Svolgimento

- [x] creo array automobili
- [x] creo array vuoto autoBenzina
- [x] creo array vuoto autoDiesel
- [x] creo array default
- [x] creo ciclo su array automobii
    switch element.alimentazione
        - "benzina" push element in autoBenzina
        - "diesel" push element in autoDiesel
        - default push element in default
