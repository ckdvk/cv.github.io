\ProvidesClass{cv}[Javi]

\LoadClass[11pt, letterpaper]{article}

\pagestyle{empty}
\usepackage{tabto}
\usepackage{changepage}

 
 
\def \spacing {1.5in}
\def \rightedge {0.5in}
\def \tabspace {2.2in}
 

\newcommand{\spaced}{ $\bullet$ }

%%\usepackage{inconsolata}
%\usepackage{ascii}
%\usepackage[T1]{fontenc}
%
%\renewcommand{\bfdefault}{bx}


\setlength{\parindent}{0pt}




\usepackage{xfakebold}
\newcommand{\fbseries}{\unskip\setBold\aftergroup\unsetBold\aftergroup\ignorespaces}
\makeatletter
\newcommand{\setBoldness}[1]{\def\fake@bold{#1}}
\makeatother

\usepackage[sfmath]{kpfonts}


\usepackage{cascadia-code}
\renewcommand*\familydefault{\ttdefault} %% Only if the base font of the document is to be typewriter style
\fontseries{sb} \selectfont
\usepackage[T1]{fontenc} 


\newcommand{\sep}{{\Large\bfseries,}}




\newcommand{\raisedrule}[2][0em]{\leaders\hbox{\rule[#1]{1pt}{#2}}\hfill}








%DICTLIKE ENVIRONMENT
\newenvironment{sectionname}[2]{{\Large\tc{niceblue}{\bfseries#1\tc{white}{:}\tc{whitegray}{\{}}}
\hfill\\
#2\vspace{-0.47cm} \hfill {\Large\bfseries\tc{whitegray}{\}}}}
 %\vspace{2pt}\raisedrule[0pt]{1pt}}}  
 



%EMPLOYMENT ENVIRONMENTS
\newenvironment{employment}[5] % 1 = Position 2 = Where 3 = Starting date, 4 =  Ending date, 5 = Description
    { 
        \tc{white}{``{\bfseries \uppercase{#1}}\, at \tc{white}{{#2}}, from \tc{white}{{#3}} to \tc{white}{{#4}}. 
        {\small \tc{nicegray}{#5}}''\sep}
    }

\newenvironment{firstemployment}[5]   % 1 = Position 2 = Where 3 = Starting date, 4 =  Ending date, 5 = Description
{ 
    \tc{white}{``{\bfseries\uppercase{#1}}\, at \tc{white}{{#2}}, from \tc{white}{{#3}} to \tc{white}{{#4}}. 
    {\small \tc{nicegray}{#5}}''} 
}


%EDUCATION ENVIRONMENTS
\newenvironment{education}[4]   % 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date
    { 
        \tc{white}{``{\bfseries #1}\, at {#2}, from {#3} to {#4}.''\sep}
    }

\newenvironment{firsteducation}[4]  % 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date
{ 
    \tc{white}{``{\bfseries #1}\, at \tc{white}{{#2}}, from \tc{white}{{#3}} to \tc{white}{{#4}}.''} 
}



%LISTLIKE ENVIRONMENT
\newenvironment{listlikeenv}[2]{{\Large\tc{niceblue}{\bfseries#1 \tc{white}{ = }\tc{whitegray}{[}}}
\hfill\\
#2\vspace{-0.47cm} \hfill {\Large\bfseries\tc{whitegray}{]}}}



%SKILLS ENVIRONMENTS
\newenvironment{skills}[2]
    { 
        \tc{white}{``{\bfseries #1} \\
           \tc{nicegray}{#2}''\sep}
    }

\newenvironment{firstskills}[2]
    { 
        \tc{white}{``{\bfseries #1} \\
           \tc{nicegray}{{#2}}''}
    }

\newcommand{\assoc}[4]{#1}

\newcommand{\spaceddos}{\spaced}





    % {\textit{#1}---\tabto{\spacing}\textbf{Position:}\tabto{\tabspace}#3\\
    % \textit{#2}\tabto{\spacing}\textbf{Where:}\tabto{\tabspace}#4\\
    % \ \tabto{\spacing}\textbf{Project:}\tabto{\tabspace}#5\\
    % \begin{adjustwidth}{\spacing}{\rightedge}
    % }
    % {
    % \end{adjustwidth}
    % \vspace{0.2in}
    % }






