# Grupa
Grupą nazywamy zbiór $G$ w którym określone jest działanie dwuargumentowe $\circ:G\circ G\rightarrow G$ o własnościach:

- działanie jest łączne: $a\circ(b\circ c)=(a\circ b)\circ c$
- działanie posiada element neutralny: $\exist_{e\in G}\forall_{g\in G}e\circ g=g\circ e=g$
- każdy element posiada element odwrotny: $\forall_{g\in G}\exist_{g^{-1}\in G}g\circ g^{-1}=g^{-1}\circ g=e$

#### Przykłady

1. Liczby całkowite z działaniem dodawania
2. Permutacje zbioru $n$-elementowego
3. Obroty w $\R^3$ względem ustalonego punktu
4. Przekształcenia symetrii wielokątów foremnych na płaszczyźnie

# Definicja podgrupy
Podgrupą nazywamy dowolny podzbiór $H$ grupy $G$, który sam jest grupą z działaniem z grupy $G$.

#### Przykłady

1. Liczby całkowite parzyste tworzą nieskończoną podgrupę grupy liczb całkowitych z działaniem dodawania
2. Obroty na płaszczyźnie o wielokrotność kąta $\frac{\pi}{6}$ tworzą skończoną podgrupę grupy obrotów po płaszczyźnie
3. Multiplikatywne grupy liczbowe $\mathbb{Q}^*<\R^*<\mathbb{C}$

# Działanie. Definicja działania.

Działaniem w zbiorze $K$ nazywamy funkcję $h$ która każdej parze $(a,\ b)$ elementów zbioru $K$ przyporządkowuje pewien element tego samego zbioru:
$$
h:K\times K\rightarrow K
$$

# Dodawanie +n

1. Jest przemienne: $a+b=b+a$
2. Jest łączne: $a+(b+c)=(a+b)+c$
3. Nie jest rozdzielne względem mnożenia: $a+(b\cdot c)\ne (a+b)\cdot(a+c)$

# Mnożenie *n
1. Jest przemienne: $a\cdot b=b\cdot a$
2. Jest łączne: $a\cdot(b\cdot c)=(a\cdot b)\cdot c$
3. Jest rozdzielne względem dodawania: $a\cdot(b+c)=(a\cdot b)+(a\cdot c)$

# Surjekcja (funkcja "na")

Funkcja przyjmująca jako swoje wartości wszystkie elementy przeciwdziedziny, tj. której obraz jest równy przeciwdziedzinie.

1. $f:x\mapsto\frac{1}{x}$ dla $x\ne0$ na $\R\setminus\{0\}$
2. $f:x\mapsto x^a$ dla $a\in\{2n+1:n\in\N\}$ na $\R$
3. $f:x\mapsto\ln{x}$ dla $x>0$ na $\R$
4. $f:x\mapsto\tg{x}$ dla $x\in\bigcup\{(-\frac{\pi}{2}+k\pi,\ \frac{\pi}{2}+k\pi):k\in\Z\}$ na $\R$
5. $f:\R\xrightarrow{\text{na}}\Z,\;f(x)=\lceil x\rceil$
6. $f:\R\xrightarrow{\text{na}}\{1\},\;f(x)=1$

# Iniekcja (funkcja "1-1")
Funkcja, której każdy element przeciwdziedziny przyjmowany jest co najwyżej raz.

1. Tożsamość $x\mapsto x$ na dowolnym zbiorze
2. $f(x)=\frac{1}{x}$ dla $x\in\R\setminus\{0\}$
3. Dowolna niestała funkcja liniowa $f:\R\rightarrow\R$, $f(x)=ax+b$, gdzie $a\ne0$

# Bijekcja
Funkcja, w której każdemu elementowi dziedziny odpowiada jeden i tylko jeden element przeciwdziedziny; wzajemnie jednoznaczna odpowiedniość między elementami dwóch zbiorów, czyli funkcja będąca jednocześnie injekcją i surjekcją.

1. $f(x)=x^2$, dla $x\in\R_+$
2. $f(x)=\frac{1}{x}$, dla $x\in\R\setminus\{0\}$

# Obraz. Definicja obrazu.
Zbiór wszystkich wartości (należących do przeciwdziedziny) przyjmowanych przez funkcję dla każdego elementu danego podzbioru jej dziedziny.

1. $f:\{1,2,3\}\rightarrow\{a,b,c,d\}$ określona wzorem
    $$
    f(x)=\begin{cases}
        a\text{ dla }x\in\{1,2\}\\
        c\text{ dla }x=3
    \end{cases}
    $$
    Obrazem zbioru $\{2,3\}$ poprzez $f$ jest $f(\{2,3\})=\{a,c\}$, a obrazem $f$ jest $\{a,c\}$  
    Przeciwobrazem $a$ jest $f^{-1}(a)=\{1,2\}$, przeciwobrazem zbioru $\{a,b\}$ również jest $\{1,2\}$, a przeciwobrazem zbioru $\{b,d\}$ jest zbiór pusty $\emptyset$
2. $f:\R\rightarrow\R$ dana jest wzorem $f(x)=x^2$.  
    Obrazem $\{-2,3\}$ w $f$ jest $f(\{-2,3\})=\{4,9\}$, a obrazem $f$ jest $\R_+$.  
    Przeciwobrazem $\{4,9\}$ w $f$ jest $f^{-1}(\{4,9\})=\{-3,-2,2,3\}$, a przeciwobrazem zbioru $N=\{n\in\R:n<0\}$ w $f$ jest zbiór pusty $\emptyset$, ponieważ liczby ujemne nie mają pierwiastków kwadratowych w zbiorze liczb rzeczywistych

# Przeciwobraz
Zbiór wszystkich elementów dziedziny, które są odwzorowywane na elementy danego podzbioru przeciwdziedziny.

1. $f:\{1,2,3\}\rightarrow\{a,b,c,d\}$ określona wzorem
    $$
    f(x)=\begin{cases}
        a\text{ dla }x\in\{1,2\}\\
        c\text{ dla }x=3
    \end{cases}
    $$
    Obrazem zbioru $\{2,3\}$ poprzez $f$ jest $f(\{2,3\})=\{a,c\}$, a obrazem $f$ jest $\{a,c\}$  
    Przeciwobrazem $a$ jest $f^{-1}(a)=\{1,2\}$, przeciwobrazem zbioru $\{a,b\}$ również jest $\{1,2\}$, a przeciwobrazem zbioru $\{b,d\}$ jest zbiór pusty $\emptyset$
2. $f:\R\rightarrow\R$ dana jest wzorem $f(x)=x^2$.  
    Obrazem $\{-2,3\}$ w $f$ jest $f(\{-2,3\})=\{4,9\}$, a obrazem $f$ jest $\R_+$.  
    Przeciwobrazem $\{4,9\}$ w $f$ jest $f^{-1}(\{4,9\})=\{-3,-2,2,3\}$, a przeciwobrazem zbioru $N=\{n\in\R:n<0\}$ w $f$ jest zbiór pusty $\emptyset$, ponieważ liczby ujemne nie mają pierwiastków kwadratowych w zbiorze liczb rzeczywistych

# Relacja równoważności
Relację $\sim$ na zbiorze $A$ będziemy nazywać relacją równoważności, jeśli ma następujące 3 właściwości:

1. Jest zwrotna: $a\sim a$
2. Jest symetryczna: $a\sim b\iff b\sim a$
3. Jest przechodnia: $a\sim b\land b\sim c\Rightarrow a\sim c$

#### Przykłady
1. W geometrii relacjami równoważności są między innymi przystawanie i podobieństwo.
2. W zbiorze prostych na płaszczyźnie określona jest relacja równoległości: proste $a$ i $b$ są równoważne, gdy są równoległe.
3. W dowolnym grafie nieskierowanym $(V,\ E)$ zdefiniujmy relację na wierzchołkach: $x\mathcal{R}y$ gdy istnieje ścieżka z $x$ do $y$ (być może jest to ścieżka pusta, jeżeli $x=y$).

# Relacja częściowego porządku

Niech $X$ będzie dowolnym zbiorem. Relację $\mathcal{R}$ określoną w zbiorze $X$ nazywamy relacją częściowego porządku, jeżeli jest zwrotna, antysymetryczna i przechodnia na $X$. Jeżeli $\mathcal{R}$ jest relacją częściowego porządku w zbiorze $X$, to parę $(X,\mathcal{R})$ nazywamy zbiorem częściowo uporządkowanym.

#### Przykłady
1. Szczególnym przypadkiem częściowego porządku jest porządek liniowy, w szczególności: naturalny porządek na liczbach rzeczywistych jest porządkiem częściowym.
2. Relacja zawierania zbiorów określona na dowolnej rodzinie podzbiorów ustalonego zbioru
3. Relacja $\preccurlyeq$ określona w zbiorze liczb zespolonych: $\displaystyle a+bi\preccurlyeq c+di\iff a\leqslant c\land b\leqslant d$ jest częściowym porządkiem. Nie jest to jednak porządek liniowy.

# Element najmniejszy

Element $x$ w częściowo uporządkowanym zbiorze $(P,\leqslant)$ nazywamy najmniejszym, jeśli jest on mniejszy (lub równy) od każdego elementu zbioru:
$$
\forall_y\in P:x\leqslant y
$$

# Element największy

Element $x$ w częściowo uporządkowanym zbiorze $(P,\leqslant)$ nazywamy największym, jeśli jest on większy (lub równy) od każdego elementu zbioru:
$$
\forall_y\in P:y\leqslant x
$$

# Element minimalny
Elementem minimalnym $x$ w zbiorze częściowo uporządkowanym $(P,\leqslant)$, nazywamy każdy taki element, że nie ma w $P$ elementów mniejszych od niego. Symbolicznie:
$$
\forall_y\in P:y\leqslant x\Rightarrow x=y
$$

# Element maksymalny
Elementem maksymalnym $x$ w zbiorze częściowo uporządkowanym $(P,\leqslant)$, nazywamy każdy taki element, że nie ma w $P$ elementów większych od niego. Symbolicznie:
$$
\forall_y\in P:x\leqslant y\Rightarrow x=y
$$

# Graf pełny, spójny, cykliczny, planarny, drzewo
- Graf pełny - graf prosty, nieskierowany, w którym dla każdej pary węzłów istnieje krawędź je łącząca
- Graf spójny - graf spełniający warunek, że dla każdej pary wierzchołków istnieje ścieżka, która je łączy
- Graf cykliczny - graf posiadający cykl. Cykl (niekoniecznie prosty) to ścieżka zamknięta, z takim samym ostatnim i pierwszym wierzchołkiem. Dodatkowo ścieżka ta może posiadać wielokrotnie ten sam wierzchołek, również z rzędu - w przypadku tzw. pętli.
- Graf planarny -  graf, który można narysować na płaszczyźnie (i każdej powierzchni genusu 0) tak, by krzywe obrazujące krawędzie grafu nie przecinały się ze sobą.
- Drzewo - graf nieskierowany, który jest acykliczny i spójny, czyli taki graf, że z każdego wierzchołka drzewa można dotrzeć do każdego innego wierzchołka (spójność) i tylko jednym sposobem (acykliczność, brak możliwości chodzenia "w kółko")

# Graf Eulera
Rodzaj grafu rozpatrywany w teorii grafów. Graf eulerowski odznacza się tym, że da się w nim skonstruować cykl Eulera, czyli cykl, który przechodzi przez każdą jego krawędź dokładnie raz. W niektórych źródłach graf zawierający tylko ścieżkę Eulera nazywany jest grafem półeulerowskim.

# Graf Hamiltona
Graf rozważany w teorii grafów zawierający ścieżkę przechodzącą przez każdy wierzchołek dokładnie jeden raz zwaną ścieżką Hamiltona. W szczególności grafem hamiltonowskim jest graf zawierający cykl Hamiltona, tj. zamkniętą ścieżkę Hamiltona. W niektórych źródłach graf zawierający tylko ścieżkę Hamiltona nazywany jest grafem półhamiltonowskim.

# Aksjomaty teorii mnogości
### Aksjomat zbioru pustego

Istnieje zbiór, który nie ma żadnego elementu:
$$
{\displaystyle \exists x\;\forall y\;\neg (y\in x)}
$$
Na mocy aksjomatu ekstensjonalności istnieje tylko jeden zbiór posiadający taką właściwość: zbiór pusty, oznaczany symbolem $\emptyset$ 

### Aksjomat podzbiorów

Dla każdego zbioru $b$ istnieje zbiór $a$, złożony z tych i tylko tych elementów $x$ zbioru $b$, które mają własność $\varphi$:
$$
{\displaystyle \forall p_{1}\dots \forall p_{n}\;\forall b\;\exists a\;\forall x\;{\bigg (}x\in a\iff {\Big (}x\in b\land \varphi (x,b,p_{1},\dots ,p_{n}){\Big )}{\bigg )}}
$$
Aksjomat podzbiorów daje się wyprowadzić z aksjomatu zbioru pustego i aksjomatu zastępowania.

### Aksjomat pary

Dla dowolnych zbiorów $a$ i $b$ istnieje zbiór $c$, którego elementami są dokładnie zbiory $a$ i $b$:
$$
{\displaystyle \forall a\;\forall b\;\exists c\;\forall x\;{\Big (}x\in c\iff (x=a\lor x=b){\Big )}}
$$

### Aksjomat sumy

Dla dowolnej rodziny zbiorów $r$ istnieje zbiór $u$, do którego należą dokładnie te elementy $x$, które należą do co najmniej jednego spośród zbiorów, które są elementami rodziny $r$:
$$
{\displaystyle \forall r\;\exists u\;\forall x\;{\Big (}x\in u\iff \exists a\;(x\in a\land a\in r){\Big )}}
$$

### Aksjomat zbioru potęgowego

Dla każdego zbioru $x$ istnieje zbiór $p$, którego elementami są dokładnie podzbiory zbioru $x$:
$$
{\displaystyle \forall x\;\exists p\;\forall z\;{\Big (}z\in p\iff \forall y\;(y\in z\Rightarrow y\in x){\Big )}}
$$

# Zasada indukcji matematycznej
Ogólnie to jest metoda dowodzenia twierdzeń, które są od jakiegoś punktu prawdziwe dla nieskończonej liczby przypadków.
Jeżeli:

1. istnieje taka liczba naturalna $n_0$, że $T(n_0)$ jest zdaniem prawdziwym,
2. dla każdej liczby naturalnej $n\geqslant n_0$ prawdziwa jest implikacja $T(n)\Rightarrow T(n + 1)$,

to $T(n)$ jest zdaniem prawdziwym dla każdej liczby naturalnej $n\geqslant n_0$

# Zasada abstrakcji
Twierdzenie matematyczne mówiące, że dowolnemu rozbiciu zbioru odpowiada pewna relacja równoważności, a każda relacja równoważności ustanawia pewne rozbicie zbioru.

# Klasa abstrakcji
Mając daną relację równoważności $\sim$ na zbiorze $A$, zbiór wszystkich elementów, które są w relacji z danym elementem $a\in A$, nazywamy klasą abstrakcji $a$ i oznaczamy $[a]_\sim$. Czyli $[a]_\sim = \{b\in A:a\sim b\}$.

1.  Klasą abstrakcji w zbiorze Polaków, z relacji posiadania urodzin w tym samym dniu, będzie zbiór ludzi urodzonych 1 stycznia, a reprezentantem tej klasy, będzie Zygmunt I Stary.

#  Zbiór ilorazowy
Rodzinę wszystkich klas abstrakcji, oznaczamy $A/_\sim$ i nazywamy zbiorem ilorazowym.

1. Relacja równości między liczbami wyznacza podział na klasy. Do jednej warstwy zalicza się liczby równe między sobą. Zbiór ilorazowy składa się tu z tego rodzaju warstw.
2.  Relacja równoległości między płaszczyznami w przestrzeni wyznacza podział na klasy. Do jednej warstwy zalicza się klasę płaszczyzn wzajem nie do siebie równoległych. Zbór ilorazowy tutaj jest złożony ze wszystkich tego rodzaju warstw.

# Homomorfizm
Funkcja odwzorowująca jedną algebrę ogólną w drugą, zachowująca przy tym odpowiadające sobie działania, jakie są zdefiniowane w obu algebrach.
Niech dane beda grupy $(A, \otimes)$ i $(B, \bullet)$. Odwzorowanie $H: A \to B$ nazywamy homomorfizmem grupy A w B jezeli spelnia warunek:

$$
\forall_{a,b \in A} H(a\otimes b) = a \bullet b
$$

# Izomorfizm
Odwzorowanie pomiędzy dwiema przestrzeniami matematycznymi, zachowujące wszystkie relacje i funkcje. Między tymi obiektami zachodzi izomorfizm — nie da się ich odróżnić na podstawie ich własności.

# Jądro
Dla danej struktury algebraicznej homomorficzny przeciwobraz elementu neutralnego. Dla danego homomorfizmu $f$ jego jądro oznacza się zwykle $\ker f$.

#### Przykład
Istnieje homomorfizm pomiędzy grupą przekształceń symetrii $n$-kąta foremnego a grupą permutacji jego wierzchołków. Każdemu przekształceniu symetrii można przypisać permutację wierzchołków, którą ono powoduje. Przypisanie to jest monomorfizmem grup.

W przypadku trójkąta równobocznego jest to jednocześnie epimorfizm, zatem grupa jego symetrii jest izomorficzna z $S_3$.

W przypadku wielokątów o większej liczbie wierzchołków nie jest to już epimorfizm i grupa symetrii takiego $n$-kąta foremnego jest właściwą podgrupą grupy $S_n$.

# Obraz homomorfizmu
Obrazem homomorfizmu $h$ nazywamy zbiór
$$
\operatorname{Im}(h)=\{a\in S:\exist_{b\in\R}a=h(b)\}
$$
czyli zbiór takich elementów $S$, które są wartościami odwzorowania $h$ na co najmniej jednym elemencie zbioru $\R$.

#### Przykład
Dla odwzorowania $Z\rightarrow Z$ i $f(a)=na$, $n\in N$ to $\operatorname{Im}(f)= nZ$


# Lemat Kuratowskiego-Zorna
Jest to  twierdzenie teorii mnogości, nazywane zwyczajowo lematem, dające pewien warunek dostateczny istnienia elementu maksymalnego w danym zbiorze częściowo uporządkowanym. Bardziej matematycznie - jeśli każdy łańcuch $A$ w zbiorze częściowo uporządkowanym $(X,\leqslant)$ ma ograniczenie górne, to w $X$ istnieje element maksymalny.
