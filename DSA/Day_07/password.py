p = input("Enter the Password")
char = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
for i in p:
    for j in char:
        if j == i:
            print("your password have", j)
        else:
            print("your password have not", j)
print("Strong password")

