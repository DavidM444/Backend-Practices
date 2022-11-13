'''''''''
from operator import itemgetter

f = {"d": 33, "B" : 44, "r" : 33, "s" : 11,"w" : 22, "x": 45}

f_asc = sorted(f.items(), key= itemgetter(1) reverse = true)

print(f)
print(f_asc)
'''''''''

def key(num):
   snum = str(num)
   k= 's'.join(sorted(snum))
   return k

key('sdfdfdffs')
print(key)