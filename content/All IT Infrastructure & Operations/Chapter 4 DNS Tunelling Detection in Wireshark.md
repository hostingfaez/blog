Use filter 

```
dns.qry.type==16 | | dns.qry.type==10 | | dns.qry.type== 0
```

16=TXT Records
10=Null Records (rare , often suspicous)
0=Reserved/Unknown

