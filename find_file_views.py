# dir=r"D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\education\subject"
# dir=r"D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin"


searchWord="""
G6Editor
"""
searchWord="""
import G6Editor from '@/components/G6Editor/index'
"""

dir=r"."
need_dir_name="student"
# dir_name_contain="store"
dir_name_contain="student"
# import WangEdiorFormula from "@/views/WangEdiorFormula";
# searchWord='''
# import WangEdiorFormula from "@/views/WangEdiorFormula";'''
import os 

# 传参 python 



# import G6Editor from '@/components/G6Editor/index'
def searchViews(view_name,view_dir):
    pass
    
    # import G6Editor from '@/components/G6Editor/index'
    # for 
    print("view_name",view_name)
    parts=view_name.split("/")
    # view_name_the_name=view_name.split("/")[-1]
    view_name_the_name=parts[-1]
    if view_name_the_name=="index":
        view_name_the_name=parts[-2]
    # view_dir='src/views'
    # view_dir='src/components'
    print("view_name_the_name",view_name_the_name)
    for view in os.listdir(view_dir):
        if view_name_the_name in view:
            filePath=os.path.join(view_dir,view)
            if os.path.isdir(filePath):
                filePath=os.path.join(filePath,'index.vue')
            idx=0
            found=False
            with open(filePath, 'r',encoding="utf-8") as f:
                # content = f.read()
                lines = f.readlines()
                # print(content)
                # print(searchWord)
                # print(content.find(searchWord))
            for line in lines:
                idx+=1
                if view_name_the_name in line:
                    # print(f'{view}:{idx}')
                    print(f'{filePath}:{idx}')
                    found=True
                    break
            if not found:
                print(f'{filePath}:{90}')
                # print(f'{view}:90')
            # if content.find(searchWord) == -1:
            #     print(f'{view}:80')
            # else:
            #     print(f'{view}:90')
            # print(f'{view}:90')


def doSearch(searchWord):
    searchWord=searchWord.strip()
    if "@/views" in searchWord:
        # from
        # from
        print('"@/views" in searchWord')
        viewRoute=searchWord.split('from')[1].strip()
        print("viewRoute")
        print(viewRoute)
        if viewRoute.endswith(";"):
            viewRoute=viewRoute[:-1]
        viewRoute=viewRoute[1:-1]
        # searchViews(searchWord)
        view_dir='src/views'
        searchViews(viewRoute,view_dir)
        return
    if "@/components" in searchWord:
        # from
        # from
        print('"@/views" in searchWord')
        viewRoute=searchWord.split('from')[1].strip()
        print("viewRoute")
        print(viewRoute)
        if viewRoute.endswith(";"):
            viewRoute=viewRoute[:-1]
        viewRoute=viewRoute[1:-1]
        print("viewRoute",viewRoute)
        # searchViews(searchWord)
        view_dir='src/components'
        searchViews(viewRoute,view_dir)
        return
    
# view_dir='src/views'
view_dir='src/components'


searchWordParts=searchWord.split('/')
# searchWordParts
# view_name="views/WangEdiorFormula"
# view_name="@/components/G6Editor/index"
view_name="@/components/G6Editor"

# import G6Editor from '@/components/G6Editor/index'
# 
# if searchWord.startswith("import"):

#  component: () => import('@/views/user/student/list'),
import os 


# function isContains(str, substr) {
#     return str.indexOf(substr) >= 0;
# }

# AttributeError: 'str' object has no attribute 'contains'
# python 字符串 是不是 含有 

# commandOutput.find("failed=0")

# if flumeAgent.find("stg")!=-1：

# vue 
# python 文件 递归查找 


# for filename in os.listdir(dir):
#     # print(fi )
#     # filename.c 
#     # js 字符串 contains
#     # vuex_contains=filename.contains("vuex")
#     vuex_contains=filename.find("vuex") !=-1
#     if  vuex_contains:

#         abs_path=os.path.join(dir,filename)
#         print(abs_path)
#         print(filename)



# 如果file 是一个情况
# 递归所有文件
def print_files_if_size(path, size):
    try:
        lsdir = os.listdir(path)
    except  PermissionError as e:
        print(e)
        return
        # https://blog.csdn.net/weixin_44828950/article/details/91471459

    dirs = [i for i in lsdir if os.path.isdir(os.path.join(path, i))]
    if dirs:
        for i in dirs:
            print_files_if_size(os.path.join(path, i), size)
    files = [i for i in lsdir if os.path.isfile(os.path.join(path, i))]
    for f in files:
        abs_file_path = os.path.join(path, f)
        path_size = os.path.getsize(abs_file_path)
        if path_size > size:
            print(abs_file_path)
            print("size:", path_size, "B, ", path_size / 1000, "KB, ", path_size / 1000 / 1000, "MB")



# 如果file 是一个情况
# 递归所有文件
def walk_files_with_name(path, size):
    try:
        lsdir = os.listdir(path)
    except  PermissionError as e:
        print(e)
        return
        # https://blog.csdn.net/weixin_44828950/article/details/91471459

    dirs = [i for i in lsdir if os.path.isdir(os.path.join(path, i))]
    # print("dirs")
    # print(dirs)
    if dirs:
        for i in dirs:
            # print("dir")
            # print(i)
            dir_name=i
            # dir_name_contain
            store_contains=dir_name.find(dir_name_contain) !=-1
            # store_contains=dir_name.find("store") !=-1
            if store_contains:
                print(dir_name)
            if i in ["node_modules"]:
                # print(i)
                pass
            else:
                # print("walk  ")
                # print(path)
                filename=i
                vuex_contains=filename.find("vuex") !=-1
                if  vuex_contains:

                    # abs_path=os.path.join(dir,filename)
                    # print(abs_path)
                    print(filename)
                walk_files_with_name(os.path.join(path, i), size)
    files = [i for i in lsdir if os.path.isfile(os.path.join(path, i))]
    for f in files:
        # abs_file_path = os.path.join(path, f)
        filename=f
        # print("filename")
        # print(filename)
        # vuex_contains=filename.find("vuex") !=-1
        # found=filename.find("store") !=-1
        abs_path=os.path.join(path,filename)
        # found=abs_path.find("store") !=-1
        found=abs_path.find(dir_name_contain) !=-1
        if  found:
        # if  vuex_contains:

            # abs_path=os.path.join(dir,filename)
            # abs_path=os.path.join(path,filename)
            print(abs_path)
            print(filename)
            
        # path_size = os.path.getsize(abs_file_path)
        # if path_size > size:
        #     print(abs_file_path)
        #     print("size:", path_size, "B, ", path_size / 1000, "KB, ", path_size / 1000 / 1000, "MB")

#  component: () => import('@/views/user/student/list'),
# need_dir_name="store"
# need_dir_name="student"
# need_file_name="store"
# walk_files_with_name(path=dir,size=0)

# import G6Editor from '@/components/G6Editor/index'
# for 


# view_name_the_name=view_name.split("/")[-1]
# # view_dir='src/views'
# # view_dir='src/components'
# for view in os.listdir(view_dir):
#     if view_name_the_name in view:
#         filePath=os.path.join(view_dir,view)
#         if os.path.isdir(filePath):
#             filePath=os.path.join(filePath,'index.vue')
#         idx=0
#         found=False
#         with open(filePath, 'r',encoding="utf-8") as f:
#             # content = f.read()
#             lines = f.readlines()
#             # print(content)
#             # print(searchWord)
#             # print(content.find(searchWord))
#         for line in lines:
#             idx+=1
#             if view_name_the_name in line:
#                 # print(f'{view}:{idx}')
#                 print(f'{filePath}:{idx}')
#                 found=True
#                 break
#         if not found:
#             print(f'{filePath}:{90}')
#             # print(f'{view}:90')
#         # if content.find(searchWord) == -1:
#         #     print(f'{view}:80')
#         # else:
#         #     print(f'{view}:90')
#         # print(f'{view}:90')

doSearch(searchWord=searchWord)
