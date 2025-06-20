#i = 0
#for i in range(0,5):
#    for j in range(0,i+1):
#       print("*",end="")
#   print()
def usefilter(n,num):
    def __init__(self, num, n):
        self.num = num
        self.n = n
    a = filter(n,num)
    return a
   
n = (int(x) for x in input().split())
num = int(input())
p = usefilter(n,num)
print("The filtered list is: ", p)