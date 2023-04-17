import{_ as s,o as a,c as n,e as l}from"./app.32c80547.js";const C=JSON.parse('{"title":"数据导出","description":"","frontmatter":{"title":"数据导出"},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"部分自定义配置","slug":"部分自定义配置","link":"#部分自定义配置","children":[{"level":3,"title":"导出文件名","slug":"导出文件名","link":"#导出文件名","children":[]},{"level":3,"title":"表头","slug":"表头","link":"#表头","children":[]},{"level":3,"title":"导出列","slug":"导出列","link":"#导出列","children":[]}]},{"level":2,"title":"完整自定义","slug":"完整自定义","link":"#完整自定义","children":[]}],"relativePath":"guide/base/data-export.md","lastUpdated":1678543100000}'),p={name:"guide/base/data-export.md"},o=l(`<h1 id="数据导出" tabindex="-1">数据导出 <a class="header-anchor" href="#数据导出" aria-hidden="true">#</a></h1><p>框架提供了基础的数据导出功能, 可以很方便的实现导出数据到 .xlsx 文件</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>此功能依赖于 <a href="https://docs.laravel-excel.com" target="_blank" rel="noreferrer">laravel-excel</a> ( maatwebsite/excel )<br></p><p>如果 <code>maatwebsite/excel</code> 安装时报错, 请先安装 <code>psr/simple-cache:^2.0</code><br> 相关 <a href="https://github.com/SpartnerNL/Laravel-Excel/issues/3815" target="_blank" rel="noreferrer">issue</a></p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在列表工具栏添加导出按钮</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">list</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Page</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">crud </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">baseCRUD</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">headerToolbar</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">createButton</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">...$this-&gt;</span><span style="color:#82AAFF;">baseHeaderToolBar</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 添加导出按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">exportAction</span><span style="color:#89DDFF;">(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">columns</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">baseList</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">crud</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="部分自定义配置" tabindex="-1">部分自定义配置 <a class="header-anchor" href="#部分自定义配置" aria-hidden="true">#</a></h2><h3 id="导出文件名" tabindex="-1">导出文件名 <a class="header-anchor" href="#导出文件名" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在控制器中重写 exportFileName 方法</span></span>
<span class="line"><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exportFileName</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">此处为导出文件名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="表头" tabindex="-1">表头 <a class="header-anchor" href="#表头" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在控制器中重写 exportHeadings 方法</span></span>
<span class="line"><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exportHeadings</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">姓名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">年龄</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">性别</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="导出列" tabindex="-1">导出列 <a class="header-anchor" href="#导出列" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在控制器中重写 exportColumns 方法</span></span>
<span class="line"><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">exportColumns</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 可以在这里自定义处理数据, 如:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">gender </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">女</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="完整自定义" tabindex="-1">完整自定义 <a class="header-anchor" href="#完整自定义" aria-hidden="true">#</a></h2><p>如果以上配置不能满足你的需求, 你可以重写 export 方法, 自定义导出逻辑</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在控制器中重写 export 方法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 此方法在 index() 中被调用, 当请求参数 _action=export 时</span></span>
<span class="line"><span style="color:#C792EA;">protected</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">export</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 默认在 storage/app/ 下</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sprintf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%s-%s.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">exportFileName</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">date</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YmdHis</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 导出本页和导出选中项都是通过 _ids 查询</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">ids </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_ids</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// listQuery() 为列表查询条件，与获取列表数据一致</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">service</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">listQuery</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">when</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">ids</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">whereIn</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">explode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">ids</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 此处使用 laravel-excel 导出，可自行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">AdminExport</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setHeadings</span><span style="color:#89DDFF;">($this-&gt;</span><span style="color:#82AAFF;">exportHeadings</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">setMap</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">exportColumns</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">store</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#82AAFF;">response</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">compact</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
