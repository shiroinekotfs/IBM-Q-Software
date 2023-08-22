from setuptools import setup, find_packages

setup(
      name='jupyter-qiskit-kernel',
      version='1.0.0',
      description='Qiskit kernel for Jupyter',
      author='IBM',
      author_email='info@ibm.com',
      license='Apache-2.0',
      classifiers=[
        'License :: OSI Approved :: Apache Software License',
        'Classifier: Programming Language :: Python',
        'Classifier: Programming Language :: Python :: 3',
        'Classifier: Framework :: Jupyter',
        'Operating System :: POSIX :: Linux',
      ],
      url='https://github.ibm.com/IBM-Q-Software/qiskit-kernel',
      include_package_data=True,
      install_requires = ['jupyter-server', 'qiskit'],
      data_files = [
          ("share/jupyter/kernels/qiskit",
           [
            'qiskit/kernel.json',
            'qiskit/logo-32x32.png',
            'qiskit/logo-64x64.png',
            'qiskit/logo-svg.svg'
           ]
          )
      ]
)
