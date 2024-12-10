
class SNS:
  def __init__(self,text):
    self._text = text
    self._post = 0

  def number(self,num):
    self._post = num
    return self._post

posts = [
  SNS("tanaka")
]
print(posts[0].number(4))

# class SNS:
#   def __init__(self, text):
#     self._text = text
#     self._post = 0

#   def number(self, num):
#     self._post = num  # 正しく self._post を更新
#     print(self._post)

# posts = [
#   SNS("tanaka")
# ]

# print(posts[0].number(4))  # ここ
