# [ Patika Veri Yapıları ve Algoritmalar ]

## Proje 1 - Insertion Sort

```
Proje 1
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.
Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.


[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.
```

<details > 
<summary> Proje1 Cevap </summary>

### [22,27,16,2,18,6] -> Insertion Sort

**_Insertion Sort,_** bilgisayar bilimlerinde kullanılan ve sıralı diziyi **her adımda öge öge oluşturan** bir sıralama algoritmasıdır.
**1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**

```
[22,27|16,2,18,6] // sıralı mı diye gelen veriler arasında gezinerek küçük olanı başa atıyor.
[16,22,27|2,18,6] //22 ve 27 sıralamasından sonra 16 daha küçük ve 22 ve 27 den sonra geldiği için ilk elemana alınıyor.
[2,16,22,27|18,6] //sonraki taradığı elemalar arasında 2 daha küçük oldugu için başa atıyor.
[2,16,18,22,27|6] //18 kendinden çncekilerden küçük ve bu yüzden büyük olacağı indise kadar ilerliyorç
[2,6,16,18,22,27] // ve sonuç olarak dizimiz sıralanmış oluyor.
```

**2. Big-O gösterimini yazınız.**

```
O(n²) // eleman eklerken aynı zamanda sıralama yaptıgı için
```

**3. Time Complexity:**

```
Worst case: O(n²)
Average case: θ(n²)
Best case: Ω(n)

```

**4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.**

```
Average case kapsamına girer.

```

**5. [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.**

```
[3,7|5,8,2,9,4,15,6]
[3,5,7|8,2,9,4,15,6]
[3,5,7,8|2,9,4,15,6]
[2,3,5,7,8|9,4,15,6]
```

</details> <br>

## Proje 2 - Merge Sort

```
Proje 2
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.
```

<details>

<summary> Proje2 Cevap </summary>

### [16,21,11,8,12,22] -> Merge Sort

**_Merge Sort (Birleştirme Sıralaması)_** , diziyi ardışık olarak **en küçük** alt dizilerine kadar **yarılayan** sonra da onları **sıraya koyarak bireştiren** özyineli bir algoritmadır.

**• Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**

```schema
        1.             [16,21,11,8,12,22]
        2.               /             \
        3.          [16,21,11]       [8,12,22]
        4.           /     \           /   \
        5.        [16,21] [11]     [8,12]  [22]
        6.          /   \    \     /   \    \
        7.       [16] [21] [11]   [8] [12] [22]
        8.           /      |       /      |
        9.        [16,21] [11]    [8,12]  [22]
        10.          \     /           \  /
        11.         [11,16,21]       [8,12,22]
        12.             \              /
        13.            [8,11,12,16,21,22]

```

**• Big-O gösterimini yazınız.**

```
O(nlogn) // hem dizi boyunca sıralama yaptıgı hem de bölünerek işlemine devam ettiği için
```

</details>

## Proje 3 - Binary Search Tree

```
Proje 3
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.
```

<details>

<summary> Proje3 Cevap </summary>

### [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] --> Binary Search Tree
Ağaçlar (Trees) **doğrusal (lineer) veri yapıları olan diziler,** bağlantılı listeler, yığınlar ve kuyruklardan farklı olarak, doğrusal olmayan **hiyerarşik** bir veri yapısıdır.
**• Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**

```
kökümüzü seçtikten sonra node'un bir sol-cocuk ve sag-cocuk olmak üzere iki verisi vardır.
  • Root'u 5 olarak seçecek olursak; 
1.           [ 5 ]  --> root node
2.          /    \
3.         1       7
4.        / \     / \
5.      0    3   6   8
6.          / \       \
7.         2   4       9   --> leaves

```


