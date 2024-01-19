from setuptools import setup, find_packages
import ibm_quantum_widgets

setup(
      name='ibm-quantum-widgets',
      version='4.0.28',
      description='IBM Quantum widgets for Jupyter',
      author='IBM Research',
      author_email='info@ibm.com',
      license='BSD-3-Clause',
      classifiers=[
        'License :: OSI Approved :: BSD License',
        'Classifier: Programming Language :: Python',
        'Classifier: Programming Language :: Python :: 3',
        'Classifier: Programming Language :: Python :: 3.6',
        'Classifier: Programming Language :: Python :: 3.7',
        'Classifier: Programming Language :: Python :: 3.8',
        'Classifier: Programming Language :: Python :: 3.9',
        'Classifier: Framework :: Jupyter',
        'Operating System :: Unix',
        'Operating System :: MacOS',
        'Operating System :: POSIX :: Linux',
        'Operating System :: Microsoft :: Windows'
      ],
      url='https://github.ibm.com/IBM-Q-Software/ibmq-jupyterlab-extensions',
      packages=['ibm_quantum_widgets'],
      keywords=['Jupyter', 'JupyterLab', 'JupyterLab3'],
      include_package_data=True,
      install_requires=['jupyterlab==3.6.7', 'ipywidgets>=7.0.0', 'qiskit>=0.38.0'],
      data_files=[
          ("share/jupyter/labextensions/@quantum/lab-widgets",
           [
            '@quantum-labwidgets/install.json',
            '@quantum-labwidgets/package.json'
           ]
          ),
          ("share/jupyter/labextensions/@quantum/lab-widgets/static",
           [
            '@quantum-labwidgets/static/00b26ac825e2095056396e0553b8ac26d3f8ad158c3826e28b4c45b385c4714a.woff2',
            '@quantum-labwidgets/static/07d8e303ce4fc12b4bb54f1004170dd190a1f3db45d400fe68060df3e0897268.ttf',
            '@quantum-labwidgets/static/08ce98e51b04d58945a301e639e02b6998af29fdfd61a7b8afdd07bbfc479d4a.ttf',
            '@quantum-labwidgets/static/0cdd387c9590a1a9f9794560022dbb59654a7d86f187aa0c81495ad42d3a7308.woff2',
            '@quantum-labwidgets/static/0d85ae7cc30f23790a7f1a58c4a112fdca8aae769b6ba11429af1d98b1b6cb3a.ttf',
            '@quantum-labwidgets/static/0f60d1b897938ec918c8ce073092411baf9438f6739465693ff18b0f9d20b021.woff2',
            '@quantum-labwidgets/static/11e4dc8a6471ff6d6ee561d53d10fde8f7489e798257ff449c5d37c197435605.woff',
            '@quantum-labwidgets/static/138ac28d1663b3037e9c5f52371fa5c63d8324f4a38d22cd573e6ea3a3fd0cf8.ttf',
            '@quantum-labwidgets/static/1c67f068fea8bb09bf099c088b1cf64bd27516a6e07f4684344873564bb66a67.ttf',
            '@quantum-labwidgets/static/1e6f9579e90e2cac37f8f60a597c436e075c114385652b7cbeb0dec0421291b3.ttf',
            '@quantum-labwidgets/static/1ece03f79f95277d57dc7f6b435a74e1379b0d46104a8530286b60ff49369ea0.ttf',
            '@quantum-labwidgets/static/210.f35dcc66ff3127969516.js',
            '@quantum-labwidgets/static/292.6dea1af252e10ab37479.js',
            '@quantum-labwidgets/static/30da91e84c893f875e252689faebdc590b2871145e8adc7f9a9d4dbd8ce0b251.woff',
            '@quantum-labwidgets/static/318.8eadebcbb75521e4619f.js',
            '@quantum-labwidgets/static/318.css',
            '@quantum-labwidgets/static/320.c04981280d7473e1b3ee.js',
            '@quantum-labwidgets/static/3931dd81faed86ba021bb2bbdc36f5bed9a38d6b4f4077aca59b265aa1b02083.ttf',
            '@quantum-labwidgets/static/477.a4ad13518a65ba0b4c7f.js',
            '@quantum-labwidgets/static/51814d270d06ff0255dba0799994fa4d8c84d11f09951d47595f4abb1f3602dc.woff2',
            '@quantum-labwidgets/static/5e28753be717dac97f559f49bc10be9cf3c124ddcabda6659d11cb68febc6463.woff',
            '@quantum-labwidgets/static/612.82d697c4d15692fd4ef2.js',
            '@quantum-labwidgets/static/612.css',
            '@quantum-labwidgets/static/68534840bcfdd2bffb6f0e8deb48684dd01e7f04ea2813267577afb906de1d13.ttf',
            '@quantum-labwidgets/static/68e8c73ef42afd3ccec58bf0fba302cce448938e7fc020a5e31f8a952eee1342.woff2',
            '@quantum-labwidgets/static/70ee1f64a20f2048c21940ef46d0144fd215baa953ca69afd1e31e98544f708f.ttf',
            '@quantum-labwidgets/static/71d517d67827787cfabdf186914cc3358eda539e37931941f2b2fd4a21f68c0b.woff2',
            '@quantum-labwidgets/static/74444efd593c005e3f4573b44524704c0af0a937fe911cca9e94068d0d140d3f.woff2',
            '@quantum-labwidgets/static/7af58c5ec8f132a2ddde9027c6d7814decce4d3b822a11192a42a20e2e973264.woff2',
            '@quantum-labwidgets/static/7ce7c3479eb9a3c56784.module.wasm',
            '@quantum-labwidgets/static/850c0af5c2238497febaf5e461d880bf458c341f42f4f330f1b1ab5698b1998e.woff',
            '@quantum-labwidgets/static/8a8d244581371912b8f3f5a23e2437cb2a59cd9bcaebb0346e722c05737a2571.woff',
            '@quantum-labwidgets/static/9163df9c7122432e6495b4229fa9071cf9ae86a758ae5efc4924ec2e1a6dbce1.ttf',
            '@quantum-labwidgets/static/91ee67500cc0129aa0ace3ac5c61ff1692102f0f31d02b69347fba35dcb75bf2.woff',
            '@quantum-labwidgets/static/95b6d2f1a50173bfedb8c63e1d1c99b10427d0a4df4201cb44513b226951a22b.ttf',
            '@quantum-labwidgets/static/97479ca6cce906abc961ecac96faa5f9ca2e61b8e7670d475826bcdee9a7c267.woff2',
            '@quantum-labwidgets/static/99cd42a3c072d918f2f44984a807cf7aa16e13545fd0875fc07c6c65f99e715b.woff2',
            '@quantum-labwidgets/static/9be7ceb88004ab8ad124082246fbfcca4091e36385d4ec6ed1df67375dad50fb.woff',
            '@quantum-labwidgets/static/a6b2099fb555c60e3a0db3a08842ebf1d732c6eb4e4bf44913613bed4fc4e39b.ttf',
            '@quantum-labwidgets/static/a6f7ec0d846ac7ad975adb8959c37ed49b94acbc4ae436db9ce9e20287e4a64c.woff',
            '@quantum-labwidgets/static/c2342cd8b869e01752a9321dc17213fc40d4d04c79688c1d43f2cf316abd7866.woff2',
            '@quantum-labwidgets/static/c6368d87e8a1a3a5d337623d83d8dc4b868f242a9ad476237d6f8d1e0f168cdc.woff',
            '@quantum-labwidgets/static/c647367d1dd4e162468717d020e1fc0f1dc5c26ebfdffbe55261713bf88c5877.ttf',
            '@quantum-labwidgets/static/c76c5d696297d51b9cb1639c7da4334f0e7dec81b42b11213b5e25ef671bb822.woff',
            '@quantum-labwidgets/static/d0332f52868370fd83ae7fa46470f90c8f2eab2fcf12bc4f88080b340c95a830.ttf',
            '@quantum-labwidgets/static/d96cdf2b3bdd4d64a8fd5f74a4c467f123a8a73931cd435889f08ffaf9bf947a.woff',
            '@quantum-labwidgets/static/dc47344dbb6cb5b655c8460d561f4df5f501b90c804ad3c6cec65fe322351ab1.woff2',
            '@quantum-labwidgets/static/e14fed02b1aba7ce9f5afd5844b5d0321b22351febc720e0de8b8723527609f7.woff',
            '@quantum-labwidgets/static/e99ae51144bf1232efcc1bfe5add36262c6866b0faab24fa75740e1b98577a62.woff2',
            '@quantum-labwidgets/static/ece03cfd83e22c212cdef66feb8442d25a083beb988db3f1883f3f9738d750ba.woff',
            '@quantum-labwidgets/static/ed0b74372feefcbb9c0666b2e210da37b7e49fa7fbbf3eeb11db5f693dacfbb7.ttf',
            '@quantum-labwidgets/static/f01f3e87d9c6a61c0c081ceb577abd864eb00a612f7ac1620dd6915fad2ef5aa.ttf',
            '@quantum-labwidgets/static/f1d6ef86f3b11a528bd5185199bd2443ecb2b0dead96d88674b5a2c12be24bdf.woff',
            '@quantum-labwidgets/static/f36ea897e19f4a2e571d1e900e4e3710e438deb05a842486045ba0a3e616a4ad.ttf',
            '@quantum-labwidgets/static/f9377ab0271cda59af24bcffbd46a4d0c8a3572ffafdbb38de2ad5ea7b0d5ee5.ttf',
            '@quantum-labwidgets/static/remoteEntry.53df12d34789a1beee73.js',
            '@quantum-labwidgets/static/style.js',
            '@quantum-labwidgets/static/third-party-licenses.json',
           ]
          ),
          ('etc/jupyter',
            [
              'jconfig/jupyter_nbconvert_config.json',
              'jconfig/jupyter_notebook_config.json'
            ]
          ),
          ('etc/jupyter/jupyter_notebook_config.d',
            [
              'jconfig/jupyter_notebook_config.d/jupyter_nbextensions_configurator.json',
              'jconfig/jupyter_notebook_config.d/jupyter_resource_usage.json',
              'jconfig/jupyter_notebook_config.d/jupyter_server_ydoc.json',
              'jconfig/jupyter_notebook_config.d/jupyterlab.json',
              'jconfig/jupyter_notebook_config.d/nbgitpuller.json'
            ]
          ),
          ('etc/jupyter/jupyter_server_config.d',
            [
              'jconfig/jupyter_server_config.d/ibm_q_lab_server_extension.json',
              'jconfig/jupyter_server_config.d/jupyter_resource_usage.json',
              'jconfig/jupyter_server_config.d/jupyter_server_fileid.json',
              'jconfig/jupyter_server_config.d/jupyter_server_health.json',
              'jconfig/jupyter_server_config.d/jupyter_server_ydoc.json',
              'jconfig/jupyter_server_config.d/jupyterlab.json',
              'jconfig/jupyter_server_config.d/nbclassic.json',
              'jconfig/jupyter_server_config.d/nbgitpuller.json',
              'jconfig/jupyter_server_config.d/notebook_shim.json'
            ]
          ),
          ('etc/jupyter/labconfig',
            [
              'jconfig/labconfig/page_config.json'
            ]
          ),
          ('etc/jupyter/nbconfig',
            [
              'jconfig/nbconfig/notebook.json',
              'jconfig/nbconfig/tree.json'
            ]
          ),
          ('etc/jupyter/nbconfig/notebook.d',
            [
              'jconfig/nbconfig/notebook.d/jupyter-cytoscape.json',
              'jconfig/nbconfig/notebook.d/jupyter-matplotlib.json',
              'jconfig/nbconfig/notebook.d/jupyter_nbextensions_configurator.json',
              'jconfig/nbconfig/notebook.d/jupyter_resource_usage.json',
              'jconfig/nbconfig/notebook.d/jupyterlab-plotly.json',
              'jconfig/nbconfig/notebook.d/widgetsnbextension.json'
            ]
          ),
          ('etc/jupyter/nbconfig/tree.d',
            [
              'jconfig/nbconfig/tree.d/jupyter_nbextensions_configurator.json'
            ]
          )
      ]
)
