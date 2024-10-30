import { TrendingCard } from "./Trending-card";


export const TrendCard = () => {
  const articles = [
    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      image:
        "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYT3EPG7tlvaH7UP37ZitMXEiMkQtL~q2-zS4sqi1rx9VeLz-tTTfcdFMN0BDkGoWLHi6TNKW~kDMJ24R6koJSlcQDALb3m3Sgkyucc~cq0tqWCcRZ7sgD~ALdKqsK6PXGj7zfvCbhbCXC9o0YqMXO8WYTNWSnrfp897ctgXh7eItnxg0e6ePy9qR1VXcOqGkF09-495XcSWg4ZR-kHqGdwNpTKDM1lP6Poq3g-i-~dbEeuAZnGavLMM0fDqMNtnge5y0o1LSoO5aZiY3A8rvsosqViDemwJbEejQlDoWkTUGxZUbrEhC~kfjikosmq2L-4TMT-ltXmKCIr~HMyMaQ__",
      tag: "Technology",
    },

    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      image:
        "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L4ynh-DBUX8NDSQ~xHqMokM3Jyjqf0HxKfWBWf5Soy236pVpNNCufTB5b8Se6QN02e5sdgOsc3XPUgRm33y-O4G4cYOj5M9gUAiM2H5nOSAFXFMPG~ldfOjSvQEQmvF5~mBBik5L9cN0W3-ZQC-j74u051DfHK83an7Wm60U0X~R-fm-t1bvl8BxSUK~d~RKwTla5FqcVAQbqMlKuiljD0xvuDMqG5yojJDjWWeN7clmyWneAjnC577pwkKPIgiLx-bDjsWqOHX8~Hcjdd2L0tYAviJMoeeBs8AnetUI7yEzdB-wF67uUSOungTNJH5bWtsg-yUq8vDALRy~upVCGA__",
      tag: "Technology",
    },

    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      image:
        "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCIoWnkjpEIqIrwpcJtOk2KaOtyEcMQU0O6NEth3hHlJFeiVIIeOAdi3sDuMYQQv96KbJKzKzipnS77HrR4hn2wsl53UAKkUH9vzn1GQTKiFc2kKa72OX7o9Zwl2mlYkm4GZPS3uPwT2OeXhAnbkyS-1d9ATRFotB9fnuo3wl2ynjOGeonLRfTRXer3pH9BSEexNx742PhVgFgP7wILWjAABFHdxnhmoMaHxHYNM9EayQWHyXMjaaJoNgx6UA62uyOHv~1CXeRs79QLmDeKpa30V6MmdGlIrX3-XFHMMji9oLQJlySpqC1AH8NfPOs11MM8i7UQ0tFiUn3FXHqn~gg__",
      tag: "Technology",
    },

    {
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      image:
        "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdBYOXzov0PapDYQybRRZJ1Mfn6h6fQEp44Rt2gclBDOeGv~5d98ONt4a2jMk0YumJhkCmuJ89Pd5Qb4tDagdcxYmhQkGQMjtbkuTA39bEAN~KLvEfIRZ~B15RCHI7kq1afYhxkmLMma3BRo4MYesnDC~EQCShRr6Lj3Q6sVJROsMRSFwjiOTzoDHjPtgMkoLmP2BRED5D-JYoFIjKUDDkkvBWB5WHvRomwD-vob~eutO02vwiDyVy3E0~biwIC1Zv~t8qyr-YUwPp5o-MkwU0j9R~NUhktjgikV93ByIwMA7rxwdMt3BpWniTLmzuIzu2NuOdyQHvuOZG7zD~6FhQ__",
      tag: "Technology",
    },
  ];

  return (
    <section className="container ">
      <h2 className="text-[#181A2A] font-bold text-2xl mb-7">Trending</h2>
      <div className="grid grid-cols-4 gap-5 mb-24">
        {articles.map((article, index) => (
          <TrendingCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};


