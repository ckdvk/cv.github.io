\ProvidesClass{cv}[Javi]

\LoadClass[11pt, letterpaper]{article}

\pagestyle{empty}
\usepackage{tabto}
\usepackage{changepage}

 
 
\def \spacing {0.029 \linewidth}
\def \rightedge {0.5 in}
\def \tabspace {0.12\linewidth}
\def \sp {0.013\linewidth}

\newcommand{\spaced}{, \ }

%%\usepackage{inconsolata}
%\usepackage{ascii}
%\usepackage[T1]{fontenc}
%
%\renewcommand{\bfdefault}{bx}


\setlength{\parindent}{0pt}




% \usepackage{xfakebold}
% \newcommand{\fbseries}{\unskip\setBold\aftergroup\unsetBold\aftergroup\ignorespaces}
\makeatletter
\newcommand{\setBoldness}[1]{\def\fake@bold{#1}}
\makeatother

\usepackage[sfmath]{kpfonts}
\usepackage{changepage}

% \usepackage{cascadia-code}
% \renewcommand*\familydefault{\ttdefault} %% Only if the base font of the document is to be typewriter style
% \fontseries{sb} \selectfont
\usepackage[T1]{fontenc} 


\newcommand{\sep}{{\Large,}}




\newcommand{\raisedrule}[2][0em]{\leaders\hbox{\rule[#1]{1pt}{#2}}\hfill}








% %DICTLIKE ENVIRONMENT
% \newenvironment{sectionname}[2]{{\Large{niceblue}{#1{white}{:}{whitegray}{\{}}}
% \hfill\\
% #2\vspace{-0.47cm} \hfill {\Large{whitegray}{\}}}}
%  %\vspace{2pt}\raisedrule[0pt]{1pt}}}  
 



%EMPLOYMENT ENVIRONMENTS
\newenvironment{employment}[5]{ 
        {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{Position:} #1\\
        {   \tabto{\spacing} --- }\tabto{\tabspace} \textbf{Where:} #2\\
        {\it\textbf{#4 } }\tabto{\tabspace}{\textbf{Brief description:}\begin{adjustwidth}{\tabspace}{10pt} \footnotesize  #5\\ \end{adjustwidth}}
    }% 1 = Position 2 = Where 3 = Starting date, 4 =  Ending date, 5 = Description



    \newenvironment{firstemployment}[5]{ 
        {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{Position:} #1\\
        {   \tabto{\spacing} --- }\tabto{\tabspace} \textbf{Where:} #2\\
        {\it\textbf{#4 } }\tabto{\tabspace}{\textbf{Brief description:}\begin{adjustwidth}{\tabspace}{10pt} \footnotesize  #5\\ \end{adjustwidth}}
    }


    \newenvironment{Section}[1]{
    {\centering\Large
    \qquad\rule{0.5\paperwidth}{1pt}\qquad \\
    \textbf{\textsc{#1}} \\\vspace{-3mm}
    \qquad\rule{0.5\paperwidth}{1pt}\qquad \\
    \vspace{3mm}}
    }







% \newenvironment{firstemployment}[5]{
%     {#1}{#2}{#3}{#4}{#5}
% }% 1 = Position 2 = Where 3 = Starting date, 4 =  Ending date, 5 = Description



%EDUCATION ENVIRONMENTS
% \newenvironment{education}[4]{ 
%     {#1}{#2}{#3}{#4} 
% }% 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date




\newenvironment{education}[4]{ 
        {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{Degree:} #1 \vspace{-2 mm}  \\
        {    \tabto{\spacing} --- }\tabto{\tabspace}  \vspace{-2mm}\\
        {\it\textbf{#4 } }\tabto{\tabspace} \textbf{Where:} #2\\
        % {\it\textbf{#4 } }\tabto{\tabspace}{\textbf{Brief description:}\begin{adjustwidth}{\tabspace}{10pt} \footnotesize  #5 \end{adjustwidth}}
    }% 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date



    \newenvironment{firsteducation}[4]{ 
        {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{Degree:} #1 \vspace{-2 mm}  \\
        {    \tabto{\spacing} --- }\tabto{\tabspace}  \vspace{-2mm}\\
        {\it\textbf{#4 } }\tabto{\tabspace} \textbf{Where:} #2\\
        % {\it\textbf{#4 } }\tabto{\tabspace}{\textbf{Brief description:}\begin{adjustwidth}{\tabspace}{10pt} \footnotesize  #5 \end{adjustwidth}}
    }% 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date


    \newenvironment{assoc}[4]{ 
        {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{#1} \vspace{-2 mm}  \\
        {    \tabto{\spacing} --- }\tabto{\tabspace}  \vspace{-2mm}\\
        {\it\textbf{#4 } }\tabto{\tabspace} \textbf{Where:} #2\\
    }% 1 = Assoc 2 = Description 3 = Starting date, 4 =  Ending date

\renewcommand{\assoc}[4]{ 
    {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{#1} \vspace{-2 mm}  \\
    {    \tabto{\spacing} --- }\tabto{\tabspace}  \vspace{-2mm}\\
    {\it\textbf{#4 } }\tabto{\tabspace} \textbf{Charge:} #2\\ \\
}


\newcommand{\spaceddos}{}

\newcommand{\talk}[4]{ 
    {\it\textbf{#1} }  \tabto{\tabspace} \textbf{Talk:} #2 \vspace{-2 mm}  
    {  }\tabto{\tabspace}  \vspace{-7mm}
    {  }\tabto{\tabspace}   \begin{adjustwidth}{\tabspace}{10pt}\textbf{Where:} #3  \end{adjustwidth}  
    {  }\tabto{\tabspace}#4
}


\newcommand{\poster}[4]{ 
    {\it\textbf{#1 } }  \tabto{\tabspace} \textbf{Talk:} #2 \vspace{-2 mm}   
    {  }\tabto{\tabspace}  \vspace{-7mm}
    {  }\tabto{\tabspace} \begin{adjustwidth}{\tabspace}{10pt}\textbf{Where:} #3  \end{adjustwidth} 
    {  }\tabto{\tabspace}#4
}




\newenvironment{stay}[5]{
    {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{#1}\\
    {   \tabto{\spacing} --- }\tabto{\tabspace}#2\\
    {\it\textbf{#4 } }\tabto{\tabspace}{\emph{Host(s):} #5\\}
}


\newenvironment{lang}[2]{
\tabto{\tabspace}  \textbf{#1:} \emph{#2}
}


\newenvironment{other}[4]{
    {\it\textbf{#3 } }  \tabto{\tabspace} \textbf{#1}\\
    {   \tabto{\sp} --- }\tabto{\tabspace} \\
    {\it\textbf{#4 } }\tabto{\tabspace}{#2\\}
}



% \newenvironment{firsteducation}[4]{ 
%     {#1}{#2}{#3}{#4} 
% }% 1 = Degree 2 = Where 3 = Starting date, 4 =  Ending date



 

 

