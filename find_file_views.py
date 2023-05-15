# dir=r"D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\src\views\education\subject"
# dir=r"D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin"


searchWord="""
G6Editor
"""
searchWord="""
import G6Editor from '@/components/G6Editor/index'
"""
searchWord="""
CodeMirrorPopUp
"""
searchWord="""
@/views/exam/question/TextContent"""

searchWord="""
select_by_con"""

searchWord="""
import G6Editor from "@/components/G6Editor/index";"""
searchWord="""
QuestionAnswerShow"""


dir=r"."
need_dir_name="student"
# dir_name_contain="store"
dir_name_contain="student"
# import WangEdiorFormula from "@/views/WangEdiorFormula";
# searchWord='''
# import WangEdiorFormula from "@/views/WangEdiorFormula";'''
import os 

# 传参 python 

def line_print(filePath,view_name_the_name):
    if os.path.isdir(filePath):
        filePath=os.path.join(filePath,'index.vue')
    idx=0
    found=False
    # if filePath
    if not os.path.exists(filePath):
        return
    with open(filePath, 'r',encoding="utf-8") as f:
        # content = f.read()
        lines = f.readlines()
  
    for line in lines:
        idx+=1
        if view_name_the_name in line:
            # print(f'{view}:{idx}')
            print(f'{filePath}:{idx}')
            found=True
            break
    if not found:
        print(f'{filePath}:{90}')


def dir_search(view_name_the_name,view_dir):
    print("view_dir")
    print(view_dir)
    print("view_name_the_name")
    print(view_name_the_name)
    print("files ============= ")
    walk_files_with_name(view_dir,view_name_the_name)
    # for view in os.listdir(view_dir):
    #     print(view)
    #     if view_name_the_name in view:
    #         line_print(view_dir,view_name_the_name)
            # filePath=os.path.join(view_dir,view)
            # if os.path.isdir(filePath):
            #     filePath=os.path.join(filePath,'index.vue')
            # idx=0
            # found=False
            # with open(filePath, 'r',encoding="utf-8") as f:
            #     # content = f.read()
            #     lines = f.readlines()
            #     # print(content)
            #     # print(searchWord)
            #     # print(content.find(searchWord))
            # for line in lines:
            #     idx+=1
            #     if view_name_the_name in line:
            #         # print(f'{view}:{idx}')
            #         print(f'{filePath}:{idx}')
            #         found=True
            #         break
            # if not found:
            #     print(f'{filePath}:{90}')

# import G6Editor from '@/components/G6Editor/index'
def searchViews(view_name,view_dir):
    pass
    
    # import G6Editor from '@/components/G6Editor/index'
    # for 
    print("view_dir",view_dir)
    print("view_name",view_name)
    parts=view_name.split("/")
    # path_end=view_name.replace("@","")
    path_end=view_name.replace("@","src")
    # view_dir
    # abs_file_path=os.path.join(view_dir,path_end)
    # __path__=os.path.abspath(__file__)
    py_file_path=os.path.abspath(__file__)
    proj_path=py_file_path.replace("find_file_views.py","")
    # find_file_views.py",
    abs_file_path=os.path.join(proj_path,path_end+".vue")
    # python 判断文件 存在
    exists_yes=os.path.exists (abs_file_path)
    # is_file=os.path.isfile(abs_file_path)
    if exists_yes:
        print("is_file")
        line_print(abs_file_path,view_name)
        return
    print("abs_file_path",abs_file_path)
    
    # python 获取 现在的 目录
    
    # view_name_the_name=view_name.split("/")[-1]
    view_name_the_name=parts[-1]
    if view_name_the_name=="index":
        view_name_the_name=parts[-2]
    # view_dir='src/views'
    # view_dir='src/components'
    print("view_name_the_name",view_name_the_name)
    # line_print(abs_file_path,view_name)
    # line_print(path_end,view_name)
    # line_print(path_end,view_name)
    # return
    components_abs_path=os.path.join(proj_path,'src/components')
    dir_search(view_name_the_name,components_abs_path)



    # .....................
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
    # ......................



    view_abs_path=os.path.join(proj_path,'src/views')
    dir_search(view_name_the_name,view_abs_path)
    # dir_search(view_name_the_name,'src/views')

def doSearch(searchWord):
    searchWord=searchWord.strip()
    if "@/views" in searchWord:
        # from
        # from
        view_dir='src/views'
        if "import" in searchWord:
            print('"@/views" in searchWord')
            viewRoute=searchWord.split('from')[1].strip()
            print("viewRoute")
            print(viewRoute)
            if viewRoute.endswith(";"):
                viewRoute=viewRoute[:-1]
            viewRoute=viewRoute[1:-1]
            # searchViews(searchWord)
        else:
            viewRoute=searchWord.strip()
        
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
    print('"@/views" in searchWord')
    viewRoute=searchWord
    # viewRoute=searchWord.split('from')[1].strip()
    print("viewRoute")
    print(viewRoute)
    if viewRoute.endswith(";"):
        viewRoute=viewRoute[:-1]
    viewRoute=viewRoute[1:-1]
    print("viewRoute",viewRoute)
    # searchViews(searchWord)
    view_dir='src/components'
    searchViews(viewRoute,view_dir)
    

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
def walk_files_with_name(path, search_word="vuex"):
    
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
                # path
                # abs_path=os.path.join(path,filename)
                # # abs_path=os.path.join(dir_name,filename)
                # line_print(abs_path,search_word)
                
                vuex_contains=filename.find(search_word) !=-1
                if  vuex_contains:

                    abs_path=os.path.join(dir_name,filename)
                    # print(abs_path)
                    print(filename)
                    # line_print(abs_path,search_word)
                walk_files_with_name(os.path.join(path, i), search_word)
    files = [i for i in lsdir if os.path.isfile(os.path.join(path, i))]
    for f in files:
        # abs_file_path = os.path.join(path, f)
        filename=f
        # print("filename")
        # print(filename)
        # vuex_contains=filename.find("vuex") !=-1
        # found=filename.find("store") !=-1
        # abs_path=os.path.join(path,filename)
        # # found=abs_path.find("store") !=-1
        # line_print(abs_path,search_word)
        # found=abs_path.find(dir_name_contain) !=-1
        # found=abs_path.find(search_word) !=-1
        found=filename.find(search_word) !=-1
        if  found:
        # if  vuex_contains:

            # abs_path=os.path.join(dir,filename)
            # abs_path=os.path.join(path,filename)
            # print(abs_path)
            # print(filename)
            abs_path=os.path.join(path,filename)
            # found=abs_path.find("store") !=-1
            line_print(abs_path,search_word)
            
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
