from setuptools import setup, find_packages
import ibm_q_lab_ui_extensions

setup(
      name='ibm-q-lab-ui-extensions',
      version='4.0.28',
      description='Quantum lab jupyter extensions',
      author='IBM Research',
      author_email='info@ibm.com',
      license='BSD-3-Clause',
      classifiers=[
        'License :: OSI Approved :: MIT License',
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
      packages=['ibm_q_lab_ui_extensions'],
      keywords=['Jupyter', 'JupyterLab', 'JupyterLab3'],
      include_package_data=True,
      install_requires=['jupyterlab==3.6.1'],
      data_files=[
          ("share/jupyter/labextensions/@quantum/lab-ui/",
           [
            "@quantum-labui/install.json",
            "@quantum-labui/package.json"
           ]
          ),
          ("share/jupyter/labextensions/@quantum/lab-ui/static",
           [
            "@quantum-labui/static/227.2f9e8895d4e10b2d74ae.js",
            "@quantum-labui/static/283.94facee3beb8b5efffa5.js",
            "@quantum-labui/static/461.3d67eb68e43d2eb823c3.js",
            "@quantum-labui/static/47.a483e34ebfe4ef830fb9.js",
            "@quantum-labui/static/530.c5f60b30428639a77b72.js",
            "@quantum-labui/static/57.81095b3991f6051c34bf.js",
            "@quantum-labui/static/62.b2c9b0b4a255405ad703.js",
            "@quantum-labui/static/62.css",
            "@quantum-labui/static/790.4a5158628ad78916e042.js",
            "@quantum-labui/static/801.9fe4121fd66b2bcb1cc7.js",
            "@quantum-labui/static/853.2c78e9e5c6b8597fa367.js",
            "@quantum-labui/static/863.2ebe2d21b251d9c56e3c.js",
            "@quantum-labui/static/978.368382515f4dda7415fb.js",
            "@quantum-labui/static/remoteEntry.3d55cbbb6abbe8f29142.js",
            "@quantum-labui/static/style.js",
            "@quantum-labui/static/third-party-licenses.json",
           ]
          )
      ]
)
