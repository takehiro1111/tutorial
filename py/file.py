
l = ['One', 'Two', 'Three','four']
with open('test.txt',"w") as f:
  config = f.('\n'.join(l))

print(config)
