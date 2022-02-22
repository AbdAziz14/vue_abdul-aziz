## Resume Materi 
### Version Control and Branch Management (Git)

> Tuliskan 3 poin yang dipelajari dari materi tersebut. Resume / ringkasan materi dapat disubmit melalui Github

1. Github dapat dipakai untuk mengatur versi suatu program jadi kita dapat tau progress update / perubahan yang ada
2. Github dapat membantu kita melakukan kerja tim dengan efisien dan mudah
3. jika dalam kerjasama tim ada yang bentrok / mengerjakan hal sama dapat diselesaikan dengan mudah dengan memakai "merge"

> Beberapa pelajaran yang bisa di dapat yaitu 
- cara membuat repository pada Github (via web) :
- untuk clone/mengkopi projek dari gitbhub ke local dengan memakai tag "git clone {link repo}" di cmd/git bash difolder local
- biasanya jika baru membuat repo dan mau mengupload file ke github dengan tetap membuat git via web dan pada cmd/gitbash projek tersebut kita menuliskan "git init" lalu "git add remote {url github}" kemudian seperti biasa "git add ." untuk mengupload semua file lalu "git commit -m {nama commit}" yang berfungsi sebagai memberi catatan untuk update kita dan terakhir "git push origin {nama branch}" untuk menpush branch kita ke github

- tag "git merge {branch_name}" berguna untuk menggabungkan branch kita dan branch lain
- tag "git log" untuk melihat log/catatan perubahan pada repo



> Berikut Uraian dari Praktikum/esai
##### [Link Github (network)](https://github.com/AbdAziz14/Altera.id/network)

##### Soal :
##### [Link Soal](https://docs.google.com/document/d/1nz3T5hTSC-C1TjsPnCvTCrkfzzJUEan4zOXxthfotTY/edit)

1.  Membuat repo via web dan $git clone {link repo}  ke file local (menggunakan cmd/gitbash)
2.  Karena ketika clone kita akan ke branch master/main
3.  untuk membuat branch develop kita menggunakan $git branch -b develop
4.  lalu menambah file/fitur yang ada
5.  jika sudah buka cmd/gitbash difolder tersebut lalu menggunakan $git add . (untuk mengupload file yang ada)  $git commit -m "branch develop (memberi catatan pada perubahan) lalu $git push origin develop (untuk push branch develop ke github)
6.  ketika sudah membuat branch develop kita akan membuat branch fitur1 yaitu dengan (menggunakan cmd/gitbash difolder tersebut) $git branch -b fitur1 (tapi perlu diingat kita harus berada pada branch develop, jika ingin dimana branch saat ini bisa emnggunakan $git branch)
7.  lalu menambah file/fitur yang ada (branch fitur1)
8.  jika sudah (buka menggunakan cmd/gitbash difolder tersebut) lalu menggunakan $git add . (untuk mengupload file yang ada)  $git commit -m "branch fitur1 (memberi catatan pada perubahan) lalu $git push origin fitur1 (untuk push branch fitur1 ke github)
9.  jika ingin menggabungkan branch (kalau aku biasa menggunakan merge requst di github langsung jika melakukan perubahan pada file yang berbeda) bisa menggunakan merge request dan bisa memilih branch mana yang akan digabungkan
10. ketika mulai maka github secara otomatis menggabungkan branch (contoh: branch develop dan branch fitur1)
11. lalu jika ingin membuat branch fitur2 maka ikuti mulai dari langkah 6
12. maka kita akan berhasil menyelesaikan Task Git